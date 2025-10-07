import React from "react";

const ComingSoon: React.FC = () => (
  <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 to-fuchsia-100 flex items-center justify-center relative overflow-hidden">
    {/* Pastel wedding icons for subtle charm */}
    <img
      src="https://img.icons8.com/clouds/500/wedding-rings.png"
      alt="rings"
      className="absolute opacity-10 right-6 top-6 w-32 sm:w-40 pointer-events-none"
      draggable={false}
    />
    <img
      src="https://img.icons8.com/clouds/500/camera.png"
      alt="camera"
      className="absolute opacity-10 left-6 bottom-6 w-32 sm:w-44 pointer-events-none"
      draggable={false}
    />
    <div className="z-10 bg-white/80 rounded-3xl shadow-2xl px-6 py-10 sm:px-14 sm:py-12 flex flex-col items-center animate-float">
      <div className="text-4xl md:text-5xl font-cursive text-fuchsia-500 mb-2 drop-shadow-lg tracking-wide">
        Coming Soon
      </div>
      <div className="flex space-x-2 mb-4">
        <span className="text-3xl md:text-4xl animate-bounce">💍</span>
        <span className="text-3xl md:text-4xl animate-bounce delay-150">📷</span>
        <span className="text-3xl md:text-4xl animate-bounce delay-300">💖</span>
      </div>
      <div className="text-center text-indigo-700 font-semibold text-lg md:text-xl mb-4">
        Capturing magical moments.<br className="hidden sm:block" />
        Our new website is on its way!
      </div>
      <div className="text-center text-indigo-900 text-base opacity-85 mt-2">
        Please check back soon <br />
        for a curated gallery, dreamy love stories & timeless portraits.
      </div>
    </div>
    {/* Add the following to your global.css or Tailwind config */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
      .font-cursive {
        font-family: 'Great Vibes', cursive;
      }
      .animate-float {
        animation: floatRings 3.6s ease-in-out infinite;
      }
      @keyframes floatRings {
        0% { transform: translateY(0px) scale(1);}
        50% { transform: translateY(-8px) scale(1.025);}
        100% { transform: translateY(0px) scale(1);}
      }
    `}</style>
  </div>
);

export default ComingSoon;
