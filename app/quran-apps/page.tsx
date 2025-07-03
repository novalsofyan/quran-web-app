import React from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qur'an Web - App",
  description: "Qur'an Web by DreamWeavers Devs ✨",
};

export default function Page() {
  return (
    <>
      <div className="quran-apps pt-16">Ini Apps</div>
      <ButtonLink input="Menuju ke Halaman Utama" href="/"></ButtonLink>
      <div className="h-[200px] bg-amber-600"></div>
      <div className="h-[2000px] bg-amber-400"></div>
    </>
  );
}
