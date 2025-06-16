# 🌍 Deskripsi Singkat

Script ini digunakan untuk mengambil data gempa bumi terbaru dari BMKG melalui API resmi dan menyimpannya secara otomatis ke Google Spreadsheet. Data yang diambil mencakup informasi waktu, lokasi, kekuatan gempa, kedalaman, wilayah terdampak, hingga peta guncangan (shakemap).


# 🔗 Sumber Data BMKG

- 🌐 **Website Resmi**: [https://data.bmkg.go.id/gempabumi/](https://data.bmkg.go.id/gempabumi/)
- 📡 **Endpoint API (JSON)**: [https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json](https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json)


# 📦 Data yang Diambil
| **Field**   | **Deskripsi**                             |
| ----------- | ----------------------------------------- |
| `Tanggal`   | Tanggal kejadian gempa                    |
| `Jam`       | Waktu kejadian                            |
| `Datetime`  | Gabungan tanggal dan jam                  |
| `Koordinat` | Lokasi lintang & bujur                    |
| `Magnitude` | Kekuatan gempa (Skala Magnitudo)          |
| `Kedalaman` | Kedalaman pusat gempa                     |
| `Wilayah`   | Wilayah yang terdampak gempa              |
| `Potensi`   | Potensi dampak seperti tsunami atau tidak |
| `Dirasakan` | Wilayah yang merasakan guncangan          |
| `Shakemap`  | Link gambar peta sebaran guncangan        |


# 🛠️ Cara Kerja
- Fungsi addData() mengambil data terbaru dari API BMKG dan menyimpan data ke baris baru di spreadsheet.
- - Jika ingin otomatisasi, bisa pakai time-driven trigger agar jalan berkala (misal: tiap jam).

# 📁 Struktur File Spreadsheet

🔎 Lihat contoh spreadsheet hasil:  
📄 [BMKG Earthquake Log Sheet](https://docs.google.com/spreadsheets/d/1hmymhKAfgLGETWPOAlcwW1VyH5cHI-LHHHdZTimsozU/edit?usp=sharing)

