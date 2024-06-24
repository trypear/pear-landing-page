"use client";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface ExtensionCallbackProps {
  authenticated: boolean;
}

export default function ExtensionCallback({
  authenticated = false,
}: ExtensionCallbackProps) {
  const searchParams = useSearchParams();
  const redirectUrl: string = searchParams?.get("redirect" || "/") || "/";

  console.log(authenticated);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1">Waiting for callback {authenticated}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
