const Footer = () => (
  <footer className="bg-background border-t border-border py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-muted-foreground">© 2024 Casa Ideal. Todos los derechos reservados.</div>
      <div className="flex gap-6 text-sm">
        <a href="/nosotros" className="hover:text-primary">Nosotros</a>
        <a href="/propiedades" className="hover:text-primary">Propiedades</a>
        <a href="/contacto" className="hover:text-primary">Contacto</a>
      </div>
    </div>
  </footer>
);

export default Footer; 