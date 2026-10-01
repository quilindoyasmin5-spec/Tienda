function Hero() {
  return (
    <section id="inicio" className="bg-pink-50 px-6 py-24">
      <article className="mx-auto max-w-4xl text-center">
        <p className="mb-3 font-semibold text-pink-600">SERVICIOS PERSONALES</p>
        <h1 className="text-4xl font-bold md:text-6xl">Cuida tu estilo, disfruta tu momento</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Encuentra servicios de belleza y cuidado personal pensados para ti.
        </p>
        <a href="#servicios" className="mt-8 inline-block rounded-full bg-pink-600 px-7 py-3 font-semibold text-white hover:bg-pink-700">
          Ver servicios
        </a>
      </article>
    </section>
  );
}

export default Hero;