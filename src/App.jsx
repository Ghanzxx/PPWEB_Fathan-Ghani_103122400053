import { useState } from 'react'
import Header from './components/Header'
import Ringkasan from './components/Ringkasan'
import FormTambahLokasi from './components/FormTambahLokasi'
import DaftarLokasi from './components/DaftarLokasi'
import Footer from './components/Footer'

// Data awal: lokasi geografis nyata
const dataAwal = [
  { id: 1, nama: 'Gunung Bromo', jenis: 'Gunung', wilayah: 'Jawa Timur, Indonesia', ketinggian: 2329,
    deskripsi: 'Gunung api aktif di kaldera Tengger yang terkenal dengan lautan pasirnya.' },
  { id: 2, nama: 'Danau Toba', jenis: 'Danau', wilayah: 'Sumatra Utara, Indonesia', ketinggian: 905,
    deskripsi: 'Danau vulkanik terbesar di dunia, terbentuk dari letusan supervulkan.' },
  { id: 3, nama: 'Puncak Jaya', jenis: 'Gunung', wilayah: 'Papua Tengah, Indonesia', ketinggian: 4884,
    deskripsi: 'Titik tertinggi di Indonesia dan di Oseania, dengan sisa gletser tropis.' },
  { id: 4, nama: 'Gunung Fuji', jenis: 'Gunung', wilayah: 'Honshu, Jepang', ketinggian: 3776,
    deskripsi: 'Gunung api berbentuk kerucut sempurna dan puncak tertinggi di Jepang.' },
  { id: 5, nama: 'Pantai Kuta', jenis: 'Pantai', wilayah: 'Bali, Indonesia', ketinggian: 0,
    deskripsi: 'Pantai berpasir di pesisir barat daya Bali, berada tepat di permukaan laut.' },
]

export default function App() {
  const [daftarLokasi, setDaftarLokasi] = useState(dataAwal)

  function tambahLokasi(lokasiBaru) {
    setDaftarLokasi([{ id: Date.now(), ...lokasiBaru }, ...daftarLokasi])
  }

  function hapusLokasi(id) {
    setDaftarLokasi(daftarLokasi.filter((lokasi) => lokasi.id !== id))
  }

  return (
    <>
      <Header
        judul="Atlas Bumi"
        subjudul="Katalog lokasi geografis: gunung, danau, pantai, dan bentang alam lainnya."
      />
      <main className="container py-4">
        <Ringkasan daftar={daftarLokasi} />
        <div className="row g-4 mt-1">
          <div className="col-lg-4">
            <FormTambahLokasi onTambah={tambahLokasi} />
          </div>
          <div className="col-lg-8">
            <DaftarLokasi daftar={daftarLokasi} onHapus={hapusLokasi} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
