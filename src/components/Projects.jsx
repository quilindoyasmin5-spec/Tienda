const projects = [
  "Paquetes de belleza",
  "Atención para eventos",
  "Cuidado personal",
];

function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-20">
      <header>
        <p className="font-semibold text-pink-600">PROYECTOS</p>
        <h2 className="mt-2 text-3xl font-bold">Ideas y servicios especiales</h2>
      </header>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <li key={project} className="rounded-2xl bg-gray-50 p-7 shadow-sm">
            <h3 className="text-xl font-bold">{project}</h3>
            <p className="mt-3 text-gray-600">
              Una propuesta pensada para ofrecer una experiencia personal y sencilla.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;