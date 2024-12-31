// src/Components/ImageComponent.js

export default function Image({ src, alt }) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className="
          absolute top-0 left-0 
          w-16 h-6   // Default size for smaller screens
          sm:w-24 sm:h-8  // Small screens like tablets
          md:w-32 md:h-12  // Medium screens like laptops (16-inch)
          lg:w-40 lg:h-14  // Large screens (21-inch)
          xl:w-48 xl:h-16  // Extra large screens
          z-10
        " 
      />
    );
  }
  