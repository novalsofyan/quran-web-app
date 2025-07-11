export default async function FetchSurat(nomorSurat: number | string) {
  const URL = `${process.env.API_SURAT}/${nomorSurat}`;
  if (!URL) throw new Error("URL tidak ada di environment");

  try {
    const res = await fetch(URL, { cache: "default" });
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    return await res.json();
  } catch (err) {
    throw new Error(`Gagal fetch surat: ${err}`);
  }
}
