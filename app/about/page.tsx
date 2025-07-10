import ButtonLink from "@/components/ui/ButtonLink";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="max-w-xs flex flex-col justify-center self-center pt-16 mt-4 pb-4 pr-4 pl-4 grow md:max-w-5xl">
      <div className="flex flex-col paragraf mb-2 md:pl-13">
        <h1 className="text-lg font-bold pb-4 md:text-4xl">✨ Tentang Aplikasi</h1>
        <p className="text-base md:text-2xl">Aplikasi web Qur&apos;an ini, dibuat dengan beberapa tujuan:</p>
        <ul className="text-base pt-4 pr-4 pl-4 pb-8 md:pb-15 md:text-2xl">
          <li>1. Pembelajaran untuk membuat website berbasis React dengan framework Next.js.</li>
          <li>
            2. Selain dijadikan sebagai pembelajaran, developer ingin membuat produk yang berguna untuk manusia, khususnya yang satu kepercayaan dengan developer (islam).
          </li>
        </ul>
        <h1 className="text-lg font-bold md:text-4xl">☕ Lucid Dreamworks Dev</h1>
        <ul className="text-base pt-4 pr-4 pl-4 pb-8 md:pb-15 md:text-2xl">
          <li>1. Noval Sofyan Ramadhan (NOSORA)</li>
        </ul>
        <h1 className="text-lg font-bold md:text-4xl">🚀 Teknologi yang digunakan</h1>
        <ul className="text-base pt-4 pr-4 pl-4 md:text-2xl">
          <li>1. React + Next.js.</li>
          <li>2. TypeScript.</li>
          <li>3. TailwindCSS.</li>
          <li>4. Font Ayat Qur&apos;an: LPMQ Isep Misbah</li>
          <li>
            5. API dari{" "}
            <Link href="https://equran.id/apidev/v2" target="_blank" rel="noopener noreferrer" className="link-text">
              https://equran.id/apidev/v2
            </Link>
          </li>
        </ul>
      </div>
      <ButtonLink input="GitHub Code" href="https://github.com/novalsofyan/quran-web-app" isSelfCentered isBlank></ButtonLink>
    </div>
  );
}
