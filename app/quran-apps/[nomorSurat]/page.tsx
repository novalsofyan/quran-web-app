// Generate SSG

const halamanSSG: { halamanNoSurat: string }[] = [];

for (let i = 1; i <= 114; i++) {
  halamanSSG.push({ halamanNoSurat: String(i) });
}

export async function generateStaticParams() {
  return halamanSSG;
}

// Server Side
import FetchSurat from "@/components/apiComp/FetchSurat";
import TypeSurat from "@/components/apiComp/InterfaceFetchSurat";
import FetchAllSurat from "@/components/apiComp/FetchAllSurat";
import TypeDataAllSurat from "@/components/apiComp/InterfaceFetchAllSurat";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { redirect } from "next/navigation";

// Metadata halaman
export const metadata: Metadata = {
  title: "App",
};

// Font untuk ayat (teks arab)
const fontAyah = localFont({
  src: "./font/LPMQ IsepMisbah.woff2",
});

// Halaman detail surat berdasarkan params (url)
export default async function BacaSurat({ params }: { params: Promise<{ nomorSurat: string }> }) {
  const parameterSurat = await params;
  const nomorSuratDariURL = parameterSurat.nomorSurat;

  // Validasi biar menghindari user iseng
  const nomorSuratParsed = parseInt(nomorSuratDariURL);

  // Ambil total surat
  const dataSuratSemua: TypeDataAllSurat = await FetchAllSurat();
  const TOTAL_SURAT = dataSuratSemua.data.length;

  // Cek apakah bukan angka, atau kurang dari 1, atau lebih dari total surat dinamis
  if (isNaN(nomorSuratParsed) || nomorSuratParsed < 1 || nomorSuratParsed > TOTAL_SURAT) {
    redirect("/quran-apps");
  }

  // Fetch data surat dari API menggunakan nomor yang sudah divalidasi
  const dataSurat: TypeSurat = await FetchSurat(nomorSuratParsed);
  const surat = dataSurat.data;

  // Kalo misal error, kembali ke halaman /quran-apps
  if (!surat) {
    redirect("/quran-apps");
  }

  return (
    <div className="container flex flex-col items-center pt-16 mt-4 mb-4 grow self-center">
      {/* Judul surat */}
      <h1 className="text-3xl md:text-5xl pb-4 w-full text-center">
        {surat.namaLatin} | <span className={fontAyah.className}>{surat.nama}</span>
        <br />
        <br />
        {surat.jumlahAyat} Ayat
      </h1>

      {/* Daftar ayat */}
      <div className="w-4/5 max-w-[700px] mt-4 space-y-4">
        {/* Render ayat - ayat sesuai surat */}
        {surat.ayat.map((ayat) => (
          <div key={ayat.nomorAyat} className="p-4 border-t border-gray-400">
            <div className="flex items-start">
              <p className="nomor-ayat text-gray-500 text-md mr-2 mt-2 flex-shrink-0">{ayat.nomorAyat}.</p>
              <p className={`${fontAyah.className} antialiased text-3xl md:text-5xl leading-24 md:leading-36 flex-grow text-right`} dir="rtl">
                {ayat.teksArab}
              </p>
            </div>
            <p className="mb-4 text-base text-green-700 md:text-xl">{ayat.teksLatin}</p>
            <p className="text-base md:text-xl">{ayat.teksIndonesia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
