export default function KartuLokasi({ lokasi, onHapus }) {
  const { id, nama, jenis, wilayah, ketinggian, deskripsi } = lokasi

  return (
    <article className="kartu h-100">
      <span className="badge-jenis">{jenis}</span>
      <h3 className="h5 mt-2 mb-1">{nama}</h3>
      <p className="wilayah mb-2">{wilayah}</p>
      <p className="mb-2">{deskripsi}</p>
      <p className="tinggi mb-3">{ketinggian.toLocaleString('id-ID')} m dpl</p>
      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => onHapus(id)}>
        Hapus
      </button>
    </article>
  )
}
