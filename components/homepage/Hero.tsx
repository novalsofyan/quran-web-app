import Link from "next/link";
import ButtonLink from "../ui/ButtonLink";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-[1920px] flex flex-col justify-center items-center gap-4 md:flex-row md:w-[90%] md:gap-0">
      {/* hero-img */}
      <div className="flex flex-col items-center md:justify-center md:w-[80%]">
        <Image
          src="/img/quran-logo.svg"
          alt="Quran Logo"
          width={300}
          height={300}
          priority
          className="w-[230px] h-[auto] md:w-[300px] md:h-[auto] lg:w-[400px] lg:h-[auto] select-none"
          draggable="false"
        />
        <p className="font-credit-img">
          Logo &quot;Quran Kareem&quot; by{" "}
          <Link href="https://commons.wikimedia.org/wiki/File:Quran_Kareem_logo.png" target="_blank" rel="noopener noreferrer" className="link-text">
            محمد الحراق
          </Link>
        </p>
      </div>
      {/* hero-desc */}
      <div className="flex flex-col items-center font-size-text-hero text-justify px-4">
        <p>Temukan kemudahan membaca dan memahami Al-Quran. Aplikasi ini hadir untuk membantumu menjelajahi ayat-ayat suci, di mana pun dan kapan pun kamu inginkan.</p>
        <ButtonLink input="Mulai Baca" href={"/quran-apps"} />
      </div>
    </div>
  );
}
