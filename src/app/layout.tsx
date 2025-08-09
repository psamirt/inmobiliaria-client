import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import GoogleMapsProvider from "@/components/GoogleMapsProvider";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PropertiesProvider } from "@/context/PropertiesProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
