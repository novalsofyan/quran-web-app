interface AudioMap {
  "01": string;
  "02": string;
  "03": string;
  "04": string;
  "05": string;
}

interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: AudioMap;
}

interface SuratSelanjutnya {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

type SuratSebelumnya =
  | boolean
  | {
      nomor: number;
      nama: string;
      namaLatin: string;
      jumlahAyat: number;
    };

interface SuratDetail {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioMap;
  ayat: Ayat[];
  suratSelanjutnya: SuratSelanjutnya;
  suratSebelumnya: SuratSebelumnya;
}

export default interface TypeSurat {
  code: number;
  message: string;
  data: SuratDetail;
}
