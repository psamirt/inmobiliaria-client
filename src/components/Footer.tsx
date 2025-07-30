"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-background border-t border-border py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © 2024 Casa Ideal. Todos los derechos reservados.
        </div>
        <Link href="/">
          <Image
            src="/images/preview2.png"
            alt="Casa Ideal"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
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
