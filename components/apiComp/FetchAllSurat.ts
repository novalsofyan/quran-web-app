export default async function FetchAllSurat() {
  const URL = process.env.API_SURAT;
  if (!URL) throw new Error("URL tidak ada di environment");

  try {
    const res = await fetch(URL, { cache: "default" });
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    return await res.json();
  } catch (err) {
    throw new Error(`Gagal fetch semua surat: ${err}`);
  }
}
