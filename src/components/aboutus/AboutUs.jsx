import React from "react";

function AboutUs() {
  return (
    <div className="section w-full flex flex-col justify-center items-center gap-7">
      <div className="nuestra-historia">
        <h2 className="text-4xl">Conoce Nuestra Historia</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OuDHmRaXMjA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="datos" id="contacto">
        <h2 className="text-4xl">Nuestra Ubicación</h2>
        <iframe
          src="https://maps.google.com/maps?q=Pablo%20Pizzurno%201233,%20Hurlingham,%20Provincia%20de%20Buenos%20Aires&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="560"
          height="315"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <p className="text-2xl">
          <span className="text-emerald-700">Dirección:</span> Pablo Pizzurno
          1233, Hurlingham, Provincia de Buenos Aires
        </p>
        <p className="text-2xl">
          <span className="text-emerald-700">Teléfono:</span> 4665-4804
        </p>
      </div>

      <div className="horarios">
        <h2 className="text-4xl">Horario de Apertura:</h2>
        <p className="text-2xl">
          <span className="text-emerald-700">Lunes a Viernes:</span> 8:00 AM -
          8:00 PM
        </p>
        <p className="text-2xl">
          <span className="text-emerald-700">Sábados:</span> 9:00 AM - 6:00 PM
        </p>
        <p className="text-2xl">
          <span className="text-emerald-700">Domingos:</span> 10:00 AM - 4:00 PM
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
