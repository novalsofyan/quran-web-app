export default async function FetchSurat() {
  const URL = process.env.API_SURAT;

  if (!URL) {
    throw new Error("URL tidak ada di environment");
  }

  const response = await fetch(URL, { cache: "default" });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Gagal mengambil data: ${response.status} ${response.statusText} - ${errorData.message || "Unknown error"}`);
  }

  const surat = await response.json();
  return surat;
}
