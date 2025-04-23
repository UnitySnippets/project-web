"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "bg-[#313244] text-[#cdd6f4] border border-[#45475a]",
        duration: 2000,
      }}
    />
  );
}