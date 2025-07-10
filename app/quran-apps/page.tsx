import type { Metadata } from "next";
import FetchAllSurat from "@/components/apiComp/FetchAllSurat";
import TypeDataAllSurat from "@/components/apiComp/InterfaceFetchAllSurat";
import parse from "html-react-parser";
import Pagination from "@/components/ui/Pagination";
import ButtonLink from "@/components/ui/ButtonLink";

// Metadata untuk halaman
export const metadata: Metadata = {
  title: "App",
};

// Ambil seluruh data surat dari API
const dataSuratLengkap: TypeDataAllSurat = await FetchAllSurat();
const daftarSurat = dataSuratLengkap.data;

// Konstanta untuk kebutuhan pagination
const TOTAL_SURAT = daftarSurat.length;
const MAKSIMAL_SURAT_PER_HALAMAN = 10;
const TOTAL_HALAMAN = Math.ceil(TOTAL_SURAT / MAKSIMAL_SURAT_PER_HALAMAN);

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  // searchParams adalah Promise, jadi butuh resolve
  const parameterURL = await searchParams;

  // Ambil parameter ?page= dari URL, defaultnya "1"
  let halamanAktif = parseInt(typeof parameterURL.page === "string" ? parameterURL.page : "1");

  // Validasi biar menghindari user iseng
  if (isNaN(halamanAktif) || halamanAktif < 1) {
    halamanAktif = 1;
  } else if (halamanAktif > TOTAL_HALAMAN) {
    halamanAktif = TOTAL_HALAMAN;
  }

  // Hitung batas index data surat yang akan ditampilkan di halaman ini
  const indexAwal = (halamanAktif - 1) * MAKSIMAL_SURAT_PER_HALAMAN;
  const indexAkhir = indexAwal + MAKSIMAL_SURAT_PER_HALAMAN;

  // Ambil data surat khusus untuk halaman aktif
  const suratUntukHalamanIni = daftarSurat.slice(indexAwal, indexAkhir);

  return (
    <div className="container font-size-text-md flex flex-col items-center pt-16 mt-4 mb-4 grow self-center">
      {/* Judul total surat */}
      <h1 className="font-size-text-lg font-bold text-center">Total Surat di Al-Qur&apos;an: {TOTAL_SURAT}</h1>

      {/* Render surat-surat buat halaman sekarang */}
      {suratUntukHalamanIni.map((surat) => (
        <div key={surat.nomor} className="card-surat flex flex-col w-4/5 max-w-[700px] p-4 mt-4 bg-white shadow-md rounded-md border border-gray-200">
          <h2 className="font-size-text-lg font-semibold mb-2 text-center">
            {surat.nomor}. {surat.namaLatin}
          </h2>
          <p>Nama Arab: {surat.nama}</p>
          <p>Arti: {surat.arti}</p>
          <p>Jumlah Ayat: {surat.jumlahAyat}</p>
          <p>Tempat Turun: {surat.tempatTurun}</p>
          <p className="font-size-text-sm text-gray-600 mt-2 mb-2">{parse(surat.deskripsi)}</p>
          <ButtonLink input="📖 Baca Surat" href={`quran-apps/${surat.nomor}`} isSelfCentered></ButtonLink>
        </div>
      ))}

      {/* Komponen navigasi halaman */}
      <Pagination totalPage={TOTAL_HALAMAN} currentPage={halamanAktif} />
    </div>
  );
}
