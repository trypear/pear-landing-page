import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

// Privacy and Data Collection Notice
// 
// At PearAI, we're committed to user privacy while striving to improve our service.
// We collect minimal, anonymized data solely for the purpose of enhancing our product
// and making informed marketing decisions. This includes:
//
// 1. Anonymous User ID: A randomly generated identifier that doesn't personally identify you.
// 2. Operating System Type: To understand which versions of our software are most needed.
// 3. User Agent: To optimize our software for different browsers and devices.
// 4. Encrypted IP Address: To analyze regional trends, stored securely and never in raw form.
//
// We do not collect any personally identifiable information. All data is encrypted,
// securely stored, and used only in aggregate form for analytical purposes.
// We comply with GDPR, CCPA, and other applicable data protection regulations.
//
// Users can opt-out of data collection at any time through our website or app settings.
// For more information, please refer to our full privacy policy at https://trypear.ai/privacy.
//
// By continuing to use PearAI, you consent to this data collection practice.
// We appreciate your trust and are committed to using this data responsibly
// to provide you with a better product experience.

function encryptIpAddress(ipAddress: string): string {
  const algorithm = 'aes-256-cbc';
  const key = process.env.ENCRYPTION_KEY;

  if (!key) {
    throw new Error('ENCRYPTION_KEY is not set in environment variables');
  }

  // Ensure the key is the correct length (32 bytes for AES-256)
  const hash = crypto.createHash('sha256');
  const keyBuffer = hash.update(key).digest();

  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, keyBuffer, iv);
  let encrypted = cipher.update(ipAddress, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return iv.toString('hex') + ':' + encrypted;
}

async function downloadFile(request: NextRequest) {
  try {
    const os_type = request.nextUrl.searchParams.get("os_type");
    if (!os_type) {
      console.error("OS type is missing from the request");
      return NextResponse.json({ error: "OS type is required" }, { status: 400 });
    }

    // Generate a unique identifier for the user
    let userId = request.cookies.get('anonymousUserId')?.value;
    if (!userId) {
      userId = uuidv4();
      // Set the cookie for future requests
      const response = NextResponse.next();
      response.cookies.set('anonymousUserId', userId as string, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 365 // 1 year
      });
    }

    // Get additional information about the request
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Improved IP address detection
    let ipAddress: string;
    if (process.env.NODE_ENV === 'development') {
      // Use a placeholder IP for development
      ipAddress = '203.0.113.195'; // Example IP from TEST-NET-3 range
    } else {
      // For production, try multiple methods to get the IP
      ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                   request.headers.get('x-real-ip') ||
                   request.ip ||
                   'Unknown';
    }

    // If it's still a localhost IP, use the placeholder
    if (['::1', '127.0.0.1', '::ffff:127.0.0.1'].includes(ipAddress)) {
      ipAddress = '203.0.113.195'; // Example IP from TEST-NET-3 range
    }

    let encryptedIpAddress;
    try {
      encryptedIpAddress = encryptIpAddress(ipAddress);
    } catch (encryptError) {
      console.error("Error encrypting IP address:", encryptError);
      encryptedIpAddress = 'encryption_failed';
    }

    const serverUrl = `${process.env.PEARAI_SERVER_URL}/download?os_type=${os_type}`;

    const res = await fetch(serverUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Anonymous-User-ID": userId || '',
        "X-User-Agent": userAgent,
        "X-IP-Address": encryptedIpAddress
      },
    });

    if (!res.ok) {
      console.error(`Server responded with status: ${res.status}`);
      const errorText = await res.text();
      console.error(`Server error response: ${errorText}`);
      return NextResponse.json(
        { error: `Server responded with status: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();

    if (!data.download_link) {
      console.error("Download link is missing from the server response");
      return NextResponse.json(
        { error: "Download link is missing from the server response" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: data.download_link });
  } catch (error: any) {
    console.error("Error in downloadFile:", error);
    let errMsg = "Error downloading file: ";
    if (error instanceof Error) {
      errMsg += error.message;
      console.error(error.stack);
    } else if (typeof error === "string") {
      errMsg += error;
    } else {
      errMsg += "Unknown error occurred";
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

export const GET = downloadFile;
