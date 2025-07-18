import { useState } from 'react';

export default function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-64 h-40 bg-gray-200 rounded-xl shadow-md overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://via.placeholder.com/250x150"
        alt="Example"
        className="w-full h-full object-cover"
      />

      {/* Hover Content */}
      <div
        className={`
          absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center
          transition-opacity duration-500 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <p className="text-lg font-semibold">Hovered Content</p>
      </div>
    </div>
  );
}