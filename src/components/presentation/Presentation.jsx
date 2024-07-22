import React from "react";

function Presentation() {
  return (
    <div className="w-full presentation section" id="inicio">
      <h1 className="text-center">
        Bienvenidos a Cafetería
        <span className="text-emerald-700"> Buen Sabor</span>
      </h1>
      <div className="h-full flex items-center present-point">
        <div className="historia">
          <h2 className="text-4xl text-center text-amber-700 w-full">
            Nuestra Historia
          </h2>
          <p className="text-3xl">
            Fundada en 1995, Cafetería Buen Sabor ha sido un pilar en la
            comunidad de nuestra ciudad, Hurlingham. Todo comenzó con dos
            amigos, Juan y Alejo, quienes compartían una pasión inigualable por
            el café de alta calidad. Decidieron aventurarse en la creación de un
            lugar donde no solo se sirviera café, sino que también se ofreciera
            un espacio acogedor y confortable para que las personas pudieran
            reunirse, trabajar, y relajarse.
          </p>
        </div>
        <div className="filosofia">
          <h2 className="text-4xl text-center text-amber-700">
            Nuestra Filosofía
          </h2>
          <p className="text-3xl">
            En Cafetería Buen Sabor, creemos firmemente en la importancia de los
            ingredientes frescos y de origen local. Nos esforzamos por ofrecer
            productos de la más alta calidad, preparados con cuidado y amor.
            Nuestro café es seleccionado meticulosamente, tostado a la
            perfección y preparado por nuestros baristas expertos, quienes ponen
            su corazón en cada taza que sirven.
          </p>
          <p className="text-3xl">
            Nuestra filosofía se basa en cuatro pilares fundamentales: <span className="text-emerald-700">calidad</span>,
            <span className="text-emerald-700">comunidad</span>, <span className="text-emerald-700">sostenibilidad</span> y <span className="text-emerald-700">hospitalidad</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
