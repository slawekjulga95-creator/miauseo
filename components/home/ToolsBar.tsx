import Image from "next/image";

const tools = [
  { name: "Semrush", src: "/tools/semrush.svg", width: 150, height: 38 },
  { name: "Senuto", src: "/tools/senuto.svg", width: 130, height: 33 },
  { name: "Surfer", src: "/tools/surferseo.svg", width: 130, height: 33 },
  { name: "Google Analytics", src: "/tools/google-analytics.svg", width: 175, height: 28 },
  { name: "Google Search Console", src: "/tools/google-search-console.svg", width: 200, height: 28 },
  { name: "Screaming Frog", src: "/tools/screaming-frog.svg", width: 150, height: 28 },
];

export default function ToolsBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 whitespace-nowrap shrink-0">
          Pracujemy na:
        </p>
        <span className="hidden lg:block w-px h-8 bg-border shrink-0" aria-hidden="true" />
        <div className="flex flex-nowrap items-center justify-center gap-4 md:gap-5">
          {tools.map((tool) => (
            <Image
              key={tool.name}
              src={tool.src}
              alt={`Logo ${tool.name}`}
              width={tool.width}
              height={tool.height}
              loading="lazy"
              className="h-5 md:h-6 w-auto shrink-0 opacity-90 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
