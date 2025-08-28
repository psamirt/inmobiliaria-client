import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import GoogleMapsProvider from "@/components/GoogleMapsProvider";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PropertiesProvider } from "@/context/PropertiesProvider";
import localFont from "next/font/local";

const times = localFont({
  src: "../../public/fonts/Verdana.ttf",
  weight: "400",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" 
    className={times.className}
    >
      <body>
        <GoogleMapsProvider>
          <PropertiesProvider>
            <Navbar />
            {children}
            <Footer />
            <FloatingWhatsApp />
            <Toaster />
          </PropertiesProvider>
        </GoogleMapsProvider>
      </body>
    </html>
  );
}
