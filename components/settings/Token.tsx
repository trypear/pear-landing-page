"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";

interface TokenProps {
  name: string;
  value: string;
}

const Token: FC<TokenProps> = ({ name, value }) => {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <div className="text-sm">
      <p className="mb-0.5 font-medium">{name}:</p>
      <div className="flex items-center gap-2">
        <div className="no-scrollbar h-7 w-full select-all overflow-x-auto whitespace-nowrap rounded-md border px-1.5 py-0.5">
          {value}
        </div>
        <Button className="h-7 rounded-md px-1.5" onClick={() => copy(value)}>
          {isCopied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
        </Button>
      </div>
    </div>
  );
};

export default Token;
