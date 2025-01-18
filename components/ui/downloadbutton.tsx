"use client";
import { Button } from "@/components/ui/button";
import { getOS } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { ArrowDownToLine } from "lucide-react";
import DownloadFeedbackForm from "./download-feedback-form";
import { useDownload } from "@/hooks/useDownload";

export default function DownloadButton({ user }: { user: User | null }) {
  const { handleDownload, showFeedback, setShowFeedback, handleFeedbackSubmit } = useDownload();

  const handleClick = async () => {
    const os = await getOS();
    handleDownload(os.download);
  };

  return (
    <>
      <Button
        variant={user ? "outline" : "default"}
        size={`${user ? "icon" : "default"}`}
        className={user ? "h-9 px-3" : "h-8 rounded-lg px-3"}
        onClick={handleClick}
      >
        {user ? <ArrowDownToLine /> : "Download"}
      </Button>

      <DownloadFeedbackForm
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </>
  );
}
