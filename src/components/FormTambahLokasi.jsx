import { useState } from 'react'

const JENIS = ['Gunung', 'Danau', 'Pantai', 'Sungai', 'Gurun', 'Hutan', 'Pulau']
const kosong = { nama: '', jenis: 'Gunung', wilayah: '', ketinggian: '', deskripsi: '' }

export default function FormTambahLokasi({ onTambah }) {
  const [isian, setIsian] = useState(kosong)
  const [pesan, setPesan] = useState('')

  // Satu handler untuk semua input (controlled component)
  function ubah(e) {
    setIsian({ ...isian, [e.target.name]: e.target.value })
  }

  function kirim(e) {
    e.preventDefault()
    if (!isian.nama.trim() || !isian.wilayah.trim()) {
      setPesan('Nama dan wilayah wajib diisi.')
      return
    }
    const tinggi = Number(isian.ketinggian)
    if (isian.ketinggian === '' || Number.isNaN(tinggi) || tinggi < 0) {
      setPesan('Ketinggian harus berupa angka 0 atau lebih.')
      return
    }
    onTambah({
      nama: isian.nama.trim(),
      jenis: isian.jenis,
      wilayah: isian.wilayah.trim(),
      ketinggian: tinggi,
      deskripsi: isian.deskripsi.trim() || 'Belum ada deskripsi.',
    })
    setIsian(kosong)
    setPesan('')
  }

  return (
    <form className="panel" onSubmit={kirim}>
      <h2 className="h5">Tambah lokasi</h2>

      <label className="form-label" htmlFor="nama">Nama lokasi</label>
      <input id="nama" name="nama" className="form-control mb-3" value={isian.nama}
        onChange={ubah} placeholder="Contoh: Gunung Rinjani" />

      <label className="form-label" htmlFor="jenis">Jenis</label>
      <select id="jenis" name="jenis" className="form-select mb-3" value={isian.jenis} onChange={ubah}>
        {JENIS.map((j) => (
          <option key={j} value={j}>{j}</option>
        ))}
      </select>

      <label className="form-label" htmlFor="wilayah">Wilayah</label>
      <input id="wilayah" name="wilayah" className="form-control mb-3" value={isian.wilayah}
        onChange={ubah} placeholder="Contoh: Lombok, Indonesia" />

      <label className="form-label" htmlFor="ketinggian">Ketinggian (m dpl)</label>
      <input id="ketinggian" name="ketinggian" type="number" min="0" className="form-control mb-3"
        value={isian.ketinggian} onChange={ubah} placeholder="3726" />

      <label className="form-label" htmlFor="deskripsi">Deskripsi</label>
      <textarea id="deskripsi" name="deskripsi" rows="3" className="form-control mb-3"
        value={isian.deskripsi} onChange={ubah} />

      {pesan && <p className="text-danger small" role="alert">{pesan}</p>}
      <button type="submit" className="btn btn-geo w-100">Tambah</button>
    </form>
  )
}
