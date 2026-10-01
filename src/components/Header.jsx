function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-pink-100 bg-white/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-xl font-bold text-pink-600">Tu Estilo</a>
        <ul className="flex gap-5 text-sm font-medium">
          <li><a href="#nosotros" className="hover:text-pink-600">Nosotros</a></li>
          <li><a href="#servicios" className="hover:text-pink-600">Servicios</a></li>
          <li><a href="#proyectos" className="hover:text-pink-600">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-pink-600">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;