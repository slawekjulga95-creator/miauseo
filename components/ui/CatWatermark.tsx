export default function CatWatermark() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.055]" style={{ width: "220px" }}>
      <svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand" fill="currentColor">
        <ellipse cx="30" cy="48" rx="16" ry="13" />
        <ellipse cx="12" cy="30" rx="7" ry="9" />
        <ellipse cx="25" cy="23" rx="7" ry="9" />
        <ellipse cx="39" cy="23" rx="7" ry="9" />
        <ellipse cx="51" cy="30" rx="7" ry="9" />
      </svg>
    </div>
  );
}
