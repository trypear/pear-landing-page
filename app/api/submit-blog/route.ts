import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/utils/withAuth";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

async function submitBlog(request: NextRequest & { user: User }) {
  const supabase = createClient();

  try {
    const { title, url, excerpt, date, author, tag, content, readingTime } =
      await request.json();
    console.log("request", request);

    const { data: blog, error } = await supabase.from("blogs").insert([
      {
        title,
        url,
        excerpt,
        date,
        author,
        readingTime,
        tag,
        content,
        status: "pending",
      },
    ]);
    console.log("blog", blog);

    if (error) {
      console.error("error submitting blog", error);
      return NextResponse.json(
        { error: "Error submitting blog. Please contact PearAI team." },
        { status: 500 },
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("error submitting blog", error);
    return NextResponse.json(
      { error: "Error submitting blog. Please contact PearAI team." },
      { status: 500 },
    );
  }
}

export const POST = withAuth(submitBlog);
