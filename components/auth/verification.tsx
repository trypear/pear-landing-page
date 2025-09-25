"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { resendConfirmationEmail } from "@/app/(auth)/actions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { HCAPTCHA_SITE_KEY_PUBLIC } from "@/utils/constants";

export default function VerificationComponent() {
  const [email, setEmail] = useState<string>("");
  const [isResending, setIsResending] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captcha = useRef<HCaptcha>(null);

  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const COOLDOWN_DURATION = 60; // 60 sec

  useEffect(() => {
    const storedEmail = localStorage.getItem("verificationEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const savedCooldownEnd = localStorage.getItem("resendCooldownEnd");
    if (savedCooldownEnd) {
      const cooldownEndTime = parseInt(savedCooldownEnd, 10);
      const currentTime = Date.now();

      if (cooldownEndTime > currentTime) {
        setCooldownActive(true);
        setCooldownTime(Math.ceil((cooldownEndTime - currentTime) / 1000));

        const timer = setInterval(() => {
          setCooldownTime((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer);
              setCooldownActive(false);
              localStorage.removeItem("resendCooldownEnd");
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);

        return () => clearInterval(timer);
      } else {
        localStorage.removeItem("resendCooldownEnd");
      }
    }
  }, []);

  const handleResendVerification = async () => {
    if (!email) {
      toast.error("Email not found. Please try signing up again.");
      return;
    }

    if (!captchaToken) {
      toast.error("Please complete the captcha challenge");
      return;
    }

    setIsResending(true);
    try {
      const result = await resendConfirmationEmail(email, captchaToken);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Verification email resent successfully!");

        setCooldownActive(true);
        setCooldownTime(COOLDOWN_DURATION);

        const cooldownEndTime = Date.now() + COOLDOWN_DURATION * 1000;
        localStorage.setItem("resendCooldownEnd", cooldownEndTime.toString());

        const timer = setInterval(() => {
          setCooldownTime((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer);
              setCooldownActive(false);
              localStorage.removeItem("resendCooldownEnd");
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      }
    } catch (error) {
      toast.error("Failed to resend verification email");
    } finally {
      setIsResending(false);
      captcha.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <section className="sm:mx-auto sm:w-full sm:max-w-md">
        <header>
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 text-primary-700 dark:text-primary-400">
            Verify your email
          </h1>
        </header>
        <article>
          <p className="mt-5 text-center text-lg text-gray-600 dark:text-gray-300">
            We&apos;ve sent a verification link to your email address.
            <br />
            Please check your inbox to verify your account.
          </p>
          {email && (
            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              Verification email sent to:{" "}
              <strong className="font-semibold">{email}</strong>
            </p>
          )}
          <div className="mt-8 flex flex-col gap-4">
            {!cooldownActive && (
              <figure className="flex justify-center">
                <HCaptcha
                  ref={captcha}
                  sitekey={HCAPTCHA_SITE_KEY_PUBLIC}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                  }}
                />
              </figure>
            )}

            <Button
              onClick={handleResendVerification}
              disabled={isResending || !captchaToken || cooldownActive}
              variant="outline"
              className="w-full"
            >
              {isResending
                ? "Resending..."
                : cooldownActive
                  ? `Resend available in ${cooldownTime}s`
                  : "Resend verification email"}
            </Button>
            <footer className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already verified?{" "}
                <Link
                  href="/signin"
                  className="font-semibold text-primary-700 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Sign in
                </Link>
              </p>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}
