import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-wrapper pt-16 flex justify-center items-center h-screen box-border">
      <div className="main max-w-[1920px] flex flex-col justify-center items-center gap-4 md:flex-row md:w-[90%] md:gap-0">
        <div className=" hero-img flex flex-col items-center md:justify-center md:w-[80%]">
          <Image className="md:hidden" src="/img/quran-logo.svg" alt="Quran Logo Mobile" width={230} height={230} />
          <Image className="hidden md:block lg:hidden" src="/img/quran-logo.svg" alt="Quran Logo Desktop" width={300} height={300} />
          <Image className="hidden lg:block" src="/img/quran-logo.svg" alt="Quran Logo Desktop" width={400} height={400} />
          <p className="font-credit-img">
            Logo "Quran Kareem" by{" "}
            <Link href="https://commons.wikimedia.org/wiki/File:Quran_Kareem_logo.png" target="_blank" rel="noopener noreferrer" className="link-text">
              محمد الحراق
            </Link>
          </p>
        </div>

        <div className="hero-desc flex flex-col items-center font-size-text-biasa text-justify px-4">
          <p>Temukan kemudahan membaca dan memahami Al-Quran. Aplikasi ini hadir untuk membantumu menjelajahi ayat-ayat suci, di mana pun dan kapan pun kamu inginkan.</p>
          <ButtonLink input="Mulai Baca" href={"/quran-apps"} />
        </div>
      </div>
    </div>
  );
}
