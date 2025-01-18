import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DownloadFeedback } from "@/types/download-feedback";

export const useDownload = () => {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();

  const handleDownload = async (os_type: string) => {
    setIsDownloading(true);
    try {
      const res = await fetch(`/api/download?os_type=${os_type}`, {
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
        setDownloadLink(download.url);
        // Show feedback form before redirecting
        setShowFeedback(true);
        // Small delay to ensure the form is shown
        setTimeout(() => {
          router.push(download.url);
        }, 100);
      }
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
