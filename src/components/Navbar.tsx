"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Nosotros", path: "/nosotros" },
    { name: "Propiedades", path: "/propiedades" },
    { name: "Contáctanos", path: "/contacto" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-background top-0 z-50 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <Link
            href="/"
            className="flex items-center space-x-2 text-primary font-bold text-xl"
          >
            <Home className="h-8 w-8" />
            <span>Casa Ideal</span>
          </Link> */}
          <Link href="/">
            <Image
              src="/images/preview2.png"
              alt="Casa Ideal"
              width={200}
              height={200}
              className="cursor-pointer brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-primary" : "text-text-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="bg-white text-black" asChild>
              <Link href="/propiedades">Buscar Casa</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="bg-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X color="black" className="h-6 w-6" />
              ) : (
                <Menu color="black" className="h-6 w-6 " />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary bg-accent"
                    : "text-text-dark hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="w-full mt-4 bg-white" asChild>
              <Link href="/propiedades" className="text-black" onClick={() => setIsOpen(false)}>
                Buscar Casa
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
