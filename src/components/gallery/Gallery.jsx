import React, { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="section" id="galeria">
      <h2 className="text-5xl text-center text-emerald-700 pt-2.5" >Galería de Cafés</h2>
      <div className="flex flex-wrap gap-4 mx-5 justify-evenly">
        {images.map((coffee) => (
          <div
            key={coffee.id}
            className="w-48"
          >
            <img
              src={coffee.image}
              alt={coffee.title}
              className="w-full rounded-t-xl"
            />
            <h3 className="bg-white text-emerald-700 text-center rounded-b-xl">{coffee.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
