/**
 * TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

function getProvinces(countryId) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      if (countryId === "id") {
        const country = [
          { id: "id-jk", name: "Jakarta" },
          { id: "id-bt", name: "Banten" },
          { id: "id-jr", name: "Jawa Barat" },
        ];
        resolve(country);
      }

      rejects(new Error("Country not found"));
    }, 1000);
  });
}

getProvinces("id")
  .then((country) => console.log(country))
  .catch((err) => console.log(err.message));

module.exports = { getProvinces: getProvinces };
