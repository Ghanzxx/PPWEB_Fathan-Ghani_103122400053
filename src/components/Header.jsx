export default function Header({ judul, subjudul }) {
  return (
    <header className="hero">
      <div className="container py-5">
        <h1>{judul}</h1>
        <p className="lead mb-0">{subjudul}</p>
      </div>
    </header>
  )
}
