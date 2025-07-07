import type { Metadata } from "next";
import FetchSurat from "@/components/apiComp/FetchSurat";
import TypeSurat from "@/components/apiComp/InterfaceFetchSurat";
import parse from "html-react-parser";

export const metadata: Metadata = {
  title: "App",
};

const surat: TypeSurat = await FetchSurat();
const dataSurat = surat.data;

export default function Page() {
  return (
    <div className="container flex flex-col items-center pt-16 mt-4 mb-4 grow self-center">
      <p className="text-xl font-bold text-center">Total Surat di Al-Qur&apos;an: {dataSurat.length}</p>

      {dataSurat.map((item) => (
        <div key={item.nomor} className="card-surat w-4/5 max-w-[700px] p-4 mt-4 bg-white shadow-md rounded-md border border-gray-200 ">
          <h2 className="text-lg font-semibold mb-2 text-center">
            {item.nomor}. {item.namaLatin}
          </h2>
          <p>Nama Arab: {item.nama}</p>
          <p>Arti: {item.arti}</p>
          <p>Jumlah Ayat: {item.jumlahAyat}</p>
          <p>Tempat Turun: {item.tempatTurun}</p>
          <p className="text-sm text-gray-600 mt-2">{parse(item.deskripsi)}</p>

          {/* {item.audioFull && item.audioFull["01"] && (
            <div className="mt-4">
              <audio controls className="w-full">
                <source src={item.audioFull["01"]} type="audio/mpeg" />
                Browser kamu tidak mendukung pemutar audio.
              </audio>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
}
