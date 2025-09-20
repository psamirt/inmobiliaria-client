import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/51989692844"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 border-2 border-white rounded-full"
    >
      <FaWhatsapp
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-12 h-12 md:w-16 md:h-16 p-3"
        size={20}
      />
    </a>
  );
};

export default FloatingWhatsApp;
