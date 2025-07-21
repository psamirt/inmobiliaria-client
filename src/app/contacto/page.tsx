import Footer from "@/components/Footer";

export default function ContactoPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Correo electrónico</label>
            <input type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mensaje</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} required />
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary/80 transition">Enviar</button>
        </form>
      </div>
      <Footer />
    </main>
  );
} 