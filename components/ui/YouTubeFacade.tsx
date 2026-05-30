"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="w-full h-full absolute inset-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="w-full h-full absolute inset-0 group"
      aria-label={`Odtwórz: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="translate-x-0.5">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="text-white/80 text-xs font-medium bg-black/40 px-3 py-1 rounded-full">{title}</span>
      </div>
    </button>
  );
}
