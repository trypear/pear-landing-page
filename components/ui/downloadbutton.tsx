"use client";
import { Button } from "@/components/ui/button";
import { getOS } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { ArrowDownToLine } from "lucide-react";
import DownloadFeedbackForm from "./download-feedback-form";
import { useDownload } from "@/hooks/useDownload";

export default function DownloadButton({ user }: { user: User | null }) {
  const {
    handleDownload,
    showFeedback,
    setShowFeedback,
    handleFeedbackSubmit,
  } = useDownload();

  const handleClick = async () => {
    const os = await getOS();
    handleDownload(os.download);
  };

  return (
    <>
      <Button
        className={
          user
            ? "h-9 rounded-xl bg-black px-4 text-base font-normal hover:bg-black/80"
            : "h-9 rounded-xl bg-black px-4 text-base font-normal hover:bg-black/80"
        }
        onClick={handleClick}
      >
        {user ? <ArrowDownToLine /> : "Download for free"}
      </Button>

      <DownloadFeedbackForm
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </>
  );
}
