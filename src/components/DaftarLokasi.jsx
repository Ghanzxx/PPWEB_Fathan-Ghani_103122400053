import KartuLokasi from './KartuLokasi'

export default function DaftarLokasi({ daftar, onHapus }) {
  // Conditional rendering: tampilan khusus bila daftar kosong
  if (daftar.length === 0) {
    return <p className="kosong">Belum ada data Lokasi</p>
  }

  return (
    <div className="row g-3">
      {daftar.map((lokasi) => (
        <div className="col-md-6" key={lokasi.id}>
          <KartuLokasi lokasi={lokasi} onHapus={onHapus} />
        </div>
      ))}
    </div>
  )
}
