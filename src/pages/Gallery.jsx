export default function Gallery() {
  const photos = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg"
  ];

  return (
    <section id="gallery" className="px-5 py-12">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="font-['Great Vibes'] text-3xl text-pink-600 mb-6">Galeri Foto</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Foto ${i+1}`}
              className="w-full h-40 object-cover rounded-lg border-2 border-pink-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
