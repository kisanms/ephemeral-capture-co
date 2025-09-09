import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+1234567890"; // Replace with actual phone number
  const message = encodeURIComponent(
    "Hi! I'm interested in your photography services. Could you please provide more information?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group touch-manipulation"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />

      {/* Tooltip - Hidden on touch devices to prevent miss-touch */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
        Chat with us on WhatsApp
        <div className="absolute top-full right-6 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
