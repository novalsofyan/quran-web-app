"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

// Komponen Pagination menerima total halaman & halaman aktif
export default function Pagination({ totalPage, currentPage }: { totalPage: number; currentPage: number }) {
  const parameterPencarian = useSearchParams();
  const pathSaatIni = usePathname();

  // Buat URL baru dengan mengganti nilai ?page=
  function buatUrlHalaman(nomorHalaman: number): string {
    const params = new URLSearchParams(parameterPencarian);
    params.set("page", nomorHalaman.toString());
    return `${pathSaatIni}?${params.toString()}`;
  }

  const MAKSIMAL_HALAMAN_TAMPIL = 5;

  // Hitung batas halaman yang akan ditampilkan
  let halamanAwal = Math.max(1, currentPage - Math.floor(MAKSIMAL_HALAMAN_TAMPIL / 2));
  let halamanAkhir = halamanAwal + MAKSIMAL_HALAMAN_TAMPIL - 1;

  // Pastikan tidak melebihi total halaman
  if (halamanAkhir > totalPage) {
    halamanAkhir = totalPage;
    halamanAwal = Math.max(1, halamanAkhir - MAKSIMAL_HALAMAN_TAMPIL + 1);
  }

  // Buat daftar nomor halaman yang ditampilkan
  const daftarHalaman: number[] = [];
  for (let i = halamanAwal; i <= halamanAkhir; i++) {
    daftarHalaman.push(i);
  }

  // Scroll ke atas secara smooth saat halaman berubah
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="mt-4 pr-4 pl-4 flex gap-2 items-center justify-center flex-wrap text-sm">
      {/* Tombol ke halaman pertama */}
      {currentPage > 3 && (
        <Link href={buatUrlHalaman(1)} scroll={false} className="px-3 py-1 border border-black rounded hover:bg-green-300">
          &laquo;
        </Link>
      )}

      {/* Tombol ke halaman sebelumnya */}
      {currentPage > 1 && (
        <Link href={buatUrlHalaman(currentPage - 1)} scroll={false} className="px-3 py-1 border border-black rounded hover:bg-green-300">
          &lsaquo;
        </Link>
      )}

      {/* Tampilkan daftar nomor halaman */}
      {daftarHalaman.map((nomorHalaman) => (
        <Link
          key={nomorHalaman}
          href={buatUrlHalaman(nomorHalaman)}
          scroll={false}
          className={`px-3 py-1 border border-black rounded ${nomorHalaman === currentPage ? "bg-green-500 text-white font-bold" : "hover:bg-green-300"}`}
        >
          {nomorHalaman}
        </Link>
      ))}

      {/* Tombol ke halaman selanjutnya */}
      {currentPage < totalPage && (
        <Link href={buatUrlHalaman(currentPage + 1)} scroll={false} className="px-3 py-1 border border-black rounded hover:bg-green-300">
          &rsaquo;
        </Link>
      )}

      {/* Tombol ke halaman terakhir */}
      {currentPage < totalPage - 2 && (
        <Link href={buatUrlHalaman(totalPage)} scroll={false} className="px-3 py-1 border border-black rounded hover:bg-green-300">
          &raquo;
        </Link>
      )}
    </div>
  );
}
