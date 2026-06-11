import Image from "next/image";

const tools = [
  { name: "Semrush", src: "/tools/semrush.svg", width: 150, height: 38 },
  { name: "Senuto", src: "/tools/senuto.svg", width: 130, height: 33 },
  { name: "Surfer", src: "/tools/surferseo.svg", width: 130, height: 33 },
];

export default function ToolsBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap shrink-0">
          Narzędzia, na których pracujemy
        </p>
        <span className="hidden md:block w-px h-8 bg-border shrink-0" aria-hidden="true" />
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {tools.map((tool) => (
            <Image
              key={tool.name}
              src={tool.src}
              alt={`Logo ${tool.name}`}
              width={tool.width}
              height={tool.height}
              loading="lazy"
              className="h-7 md:h-8 w-auto grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
