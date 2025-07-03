import React from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qur'an Web - App",
  description: "Qur'an Web App by DreamWeavers Devs ✨",
};

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center pt-16 min-h-screen">
      <p className="font-size-text-biasa">Soon</p>
      <ButtonLink input="Menuju ke Halaman Utama" href="/"></ButtonLink>
    </div>
  );
}
