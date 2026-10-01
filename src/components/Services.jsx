const services = [
  { name: "Manicure", description: "Cuidado y arreglo de uñas.", price: "$25.000" },
  { name: "Peinado", description: "Peinados para ocasiones especiales.", price: "$35.000" },
  { name: "Maquillaje", description: "Maquillaje para eventos y momentos especiales.", price: "$45.000" },
  { name: "Cuidado facial", description: "Limpieza y cuidado básico del rostro.", price: "$40.000" }
];

function Services() {
  return (
    <section id="servicios" className="bg-white px-6 py-20">
      <header className="mx-auto max-w-6xl">
        <p className="font-semibold text-pink-600">SERVICIOS</p>
        <h2 className="mt-2 text-3xl font-bold">Elige tu servicio</h2>
      </header>

      <ul className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service.name} className="rounded-2xl border border-pink-100 bg-pink-50 p-6">
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="mt-3 text-gray-600">{service.description}</p>
            <p className="mt-5 font-bold text-pink-600">{service.price}</p>
            <a href="#contacto" className="mt-5 inline-block font-semibold underline">Solicitar</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;