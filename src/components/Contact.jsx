function Contact() {
  return (
    <section id="contacto" className="bg-pink-50 px-6 py-20">
      <article className="mx-auto max-w-2xl">
        <header className="text-center">
          <p className="font-semibold text-pink-600">CONTACTO</p>
          <h2 className="mt-2 text-3xl font-bold">Solicita información</h2>
        </header>

        <form className="mt-10 grid gap-5">
          <label className="grid gap-2">
            <span className="font-medium">Nombre</span>
            <input type="text" className="rounded-lg border border-pink-200 bg-white px-4 py-3 outline-none focus:border-pink-500" placeholder="Tu nombre" />
          </label>

          <label className="grid gap-2">
            <span className="font-medium">Servicio</span>
            <select className="rounded-lg border border-pink-200 bg-white px-4 py-3 outline-none focus:border-pink-500">
              <option>Manicure</option>
              <option>Peinado</option>
              <option>Maquillaje</option>
              <option>Cuidado facial</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="font-medium">Mensaje</span>
            <textarea rows="4" className="rounded-lg border border-pink-200 bg-white px-4 py-3 outline-none focus:border-pink-500" placeholder="Escribe tu mensaje"></textarea>
          </label>

          <button type="button" className="rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700">
            Enviar solicitud
          </button>
        </form>
      </article>
    </section>
  );
}

export default Contact;