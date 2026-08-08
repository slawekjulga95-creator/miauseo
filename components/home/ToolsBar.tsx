import Image from "next/image";

/**
 * Ściana logotypów. Każde logo ma inną paletę i inną proporcję znaku do napisu,
 * więc jedziemy je na szaro i wyrównujemy optycznie wysokością — kolor wraca
 * dopiero pod kursorem. Bez tego pasek wygląda jak zlepek naklejek.
 */
const tools = [
  { name: "Semrush", src: "/tools/semrush.svg", width: 150, height: 38, h: "h-[19px]" },
  { name: "Senuto", src: "/tools/senuto.svg", width: 130, height: 33, h: "h-[21px]" },
  { name: "Surfer", src: "/tools/surferseo.svg", width: 130, height: 33, h: "h-[20px]" },
  { name: "Google Analytics", src: "/tools/google-analytics.svg", width: 175, height: 28, h: "h-[18px]" },
  { name: "Google Search Console", src: "/tools/google-search-console.svg", width: 200, height: 28, h: "h-[18px]" },
  { name: "Screaming Frog", src: "/tools/screaming-frog.svg", width: 150, height: 28, h: "h-[19px]" },
];

export default function ToolsBar() {
  return (
    <section className="hidden lg:block bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-zinc-500">
          Pracujemy na narzędziach
        </p>
        <div className="mt-7 flex flex-nowrap items-center justify-between gap-8">
          {tools.map((tool) => (
            <Image
              key={tool.name}
              src={tool.src}
              alt={`Logo ${tool.name}`}
              width={tool.width}
              height={tool.height}
              loading="lazy"
              className={`${tool.h} w-auto shrink-0 grayscale contrast-[1.35] brightness-[0.55] opacity-90 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
