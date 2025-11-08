"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  width?: number;
  height?: number;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className = "", 
  fallback = "/images/butter.png",
  width,
  height
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={`relative ${className}`} style={{ width: width || '100%', height: height || '100%' }}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImgSrc(fallback)}
        unoptimized
      />
    </div>
  );
}

