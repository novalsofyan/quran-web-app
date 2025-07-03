import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-wrapper pt-16 flex justify-center items-center h-screen box-border">
      <div className="main max-w-[1920px] flex flex-col justify-center items-center gap-4 md:flex-row md:w-[90%] md:gap-0">
        <div className="hero-img flex flex-col items-center md:justify-center md:w-[80%]">
          <Image
            src="/img/quran-logo.svg"
            alt="Quran Logo"
            width={300}
            height={300}
            priority
            className="w-[230px] h-[auto] md:w-[300px] md:h-[auto] lg:w-[400px] lg:h-[auto]"
          />
          <p className="font-credit-img">
            Logo &quot;Quran Kareem&quot; by{" "}
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
