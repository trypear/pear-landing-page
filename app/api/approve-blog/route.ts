import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { withAuth } from "@/utils/withAuth";
// Todo only admin can approve blog
async function updateBlogStatus(request: NextRequest) {
    const supabase = createClient();

    try {
        const { id } = await request.json();

        const { data, error } = await supabase
            .from("blog")
            .update({ status: "approved" })
            .eq("id", id);

        if (error) {
            console.error("Error updating blog status:", error);
            return NextResponse.json(
                { error: "Failed to update blog status" },
                { status: 500 },
            );
        }

        return NextResponse.json({
            message: "Blog status updated successfully",
            data,
        });
    } catch (error) {
        console.error("Error parsing request body:", error);
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 },
        );
    }
}

async function getBlog(request: NextRequest) {
    const supabase = createClient();

    try {
        const { data, error } = await supabase
            .from('blog')
            .select('*')
            .eq('status', 'pending');

        if (error) {
            return NextResponse.json(
            { error: "failed to fetch blogs"},
            { status: 500 },
            );
        }

        return NextResponse.json(data,{status:200});

    } catch (error) {
        console.error("Error parsing request body:", error);
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 },
        );
    }
}

export const POST = updateBlogStatus;
export const GET = getBlog
