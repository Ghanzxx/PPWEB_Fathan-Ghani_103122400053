# Atlas Bumi (Frontend React)

Aplikasi katalog lokasi geografis. Entitas data utama: **Lokasi** (nama, jenis, wilayah, ketinggian, deskripsi).

## Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Komponen (src/components)
- `Header`: judul aplikasi
- `Ringkasan`: jumlah lokasi, jenis, dan ketinggian tertinggi
- `FormTambahLokasi`: form controlled + tombol Tambah
- `DaftarLokasi`: render list dengan `.map()` dan conditional rendering
- `KartuLokasi`: kartu satu lokasi
- `Footer`

State daftar lokasi berada di `App.jsx`.
