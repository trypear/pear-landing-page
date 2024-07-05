import { useCallback, useState, useEffect } from "react";
import { toast } from "sonner";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

const COPY_TIMEOUT = 3000;

/**
 * A custom hook for copying text to the clipboard.
 * @returns An object containing:
 *   - isCopied: A boolean indicating if the text was just copied
 *   - copiedText: The text that was copied (or null if nothing was copied)
 *   - copy: A function to copy text to the clipboard
 */
export function useCopyToClipboard(): {
  isCopied: boolean;
  copiedText: CopiedValue;
  copy: CopyFn;
} {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      toast.warning("Clipboard not supported");
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);
      return true;
    } catch (error: unknown) {
      toast.warning("Copy failed");
      setCopiedText(null);
      return false;
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, COPY_TIMEOUT);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isCopied]);

  return { isCopied, copiedText, copy };
}
