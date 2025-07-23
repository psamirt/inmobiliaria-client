import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import GoogleMapsProvider from "@/components/GoogleMapsProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <GoogleMapsProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </GoogleMapsProvider>
      </body>
    </html>
  );
}
