
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-28" }) => {
  // Official Bude Boxing Academy logo image from Dropbox
  const logoImageUrl = "https://www.dropbox.com/scl/fi/m015udkab1ivmnedidblp/bude-boxing-acadamy.jpg?rlkey=2he7rx4axpan3x0orxrk0vww9&st=rwoow5h4&raw=1";

  return (
    <div className="flex items-center gap-6 group">
      <div className={`${className} aspect-square overflow-hidden rounded-md flex items-center justify-center bg-brandBlack border border-brandGreen/40 shadow-lg group-hover:shadow-brandGreen/20 group-hover:border-brandGreen transition-all duration-500 transform group-hover:scale-105`}>
        <img
          src={logoImageUrl}
          alt="Bude Boxing Academy Logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-black text-white text-4xl md:text-5xl tracking-tighter uppercase mb-1">
          Bude Boxing
        </span>
        <span className="font-heading font-bold text-brandGreen text-xl md:text-2xl tracking-[0.3em] uppercase">
          Academy
        </span>
      </div>
    </div>
  );
};

export default Logo;
