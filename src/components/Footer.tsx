"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-background py-8 mt-16 text-primary-foreground border-t border-primary-foreground md:max-w-6xl max-w-[380px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm ">
          © 2024 Choni Espejo. Todos los derechos reservados.
        </div>
        <Link href="/"></Link>
        <div className="flex gap-6 text-sm">
          <button
            onClick={() => router.push("/nosotros")}
            className="hover:text-primary"
          >
            Nosotros
          </button>
          <button
            onClick={() => router.push("/propiedades")}
            className="hover:text-primary"
          >
            Propiedades
          </button>
          <button
            onClick={() => router.push("/contacto")}
            className="hover:text-primary"
          >
            Contacto
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
