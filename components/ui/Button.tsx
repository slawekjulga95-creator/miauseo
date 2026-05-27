import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const base =
  "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 cursor-pointer";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  ghost:
    "bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-white",
  dark: "bg-ink text-white hover:bg-zinc-800",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
