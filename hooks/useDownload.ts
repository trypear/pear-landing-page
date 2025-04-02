import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DownloadFeedback } from "@/types/download-feedback";
import { getDownloadUrl } from "@/utils/constants";

export const useDownload = () => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();

  const handleDownload = async (os_type: string) => {
    setIsDownloading(true);
    try {
      const url = getDownloadUrl(os_type as any);
      if (!url) {
        throw new Error("Unsupported operating system");
      }

      setDownloadLink(url);
      // Show feedback form before redirecting
      setShowFeedback(true);
      // Small delay to ensure the form is shown
      setTimeout(() => {
        router.push(url);
      }, 100);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleFeedbackSubmit = async (feedback: DownloadFeedback) => {
    try {
      const response = await fetch("/api/download/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return {
    isDownloading,
    showFeedback,
    downloadLink,
    handleDownload,
    handleFeedbackSubmit,
    setShowFeedback,
  };
};
