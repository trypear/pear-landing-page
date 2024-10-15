"use client";
import { Button } from "@/components/ui/button";
import { getOS } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { ArrowDownToLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DownloadButton({ user }: { user: User | null }) {
  const router = useRouter();
  const handleDownload = async () => {
    try {
      const os = await getOS();
      if (os.download === "linux") {
        router.push("/blog/download-pearai-on-linux");
        return;
      }
      const res = await fetch(`/api/download?os_type=${os.download}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw Error(res.statusText);
      }

      const download = await res.json();
      if (download?.url) {
        router.push(download.url);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Button
      variant={user ? "outline" : "default"}
      size={`${user ? "icon" : "default"}`}
      className={user ? "h-9 px-3" : ""}
      onClick={handleDownload}
    >
      {user ? <ArrowDownToLine /> : "Download"}
    </Button>
  );
}
