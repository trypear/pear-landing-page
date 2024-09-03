"use client";
import { useSearchParams } from "next/navigation";

export default function AuthCodeErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error") || "Unknown error occurred";

  return (
    <div className="mx-auto max-w-md pt-44 md:pt-32">
      <h1 className="text-center text-3xl font-semibold md:text-5xl md:font-normal">
        Authentication Error
      </h1>
      <p className="mt-4 text-center">{error}</p>
    </div>
  );
}
