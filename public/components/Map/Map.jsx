// components/EmbedMap.js
"use client";
import { useEffect, useState } from "react";

const EmbedMap = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <span className="text-blue-500">Loading map...</span>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3493.9088326700676!2d38.76170546303227!3d9.039370308906538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5kilo%20addis%20ababa!5e1!3m2!1sen!2set!4v1728637565656!5m2!1sen!2set"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleLoad} // Set loading to false when the map loads
      />
    </div>
  );
};

export default EmbedMap;
