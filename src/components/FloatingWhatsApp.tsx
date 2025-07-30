import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/51989174240"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <FaWhatsapp
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 p-3"
        size={20}
      />
    </a>
  );
};

export default FloatingWhatsApp;
