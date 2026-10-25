export default function Ringkasan({ daftar }) {
  const total = daftar.length
  const jumlahJenis = new Set(daftar.map((l) => l.jenis)).size
  const tertinggi = daftar.reduce((maks, l) => (l.ketinggian > maks ? l.ketinggian : maks), 0)

  return (
    <div className="row g-3" aria-label="Ringkasan data">
      <div className="col-sm-4">
        <div className="stat"><small>Jumlah lokasi</small><b>{total}</b></div>
      </div>
      <div className="col-sm-4">
        <div className="stat"><small>Jenis bentang alam</small><b>{jumlahJenis}</b></div>
      </div>
      <div className="col-sm-4">
        <div className="stat">
          <small>Ketinggian tertinggi</small>
          <b>{tertinggi.toLocaleString('id-ID')} m</b>
        </div>
      </div>
    </div>
  )
}
