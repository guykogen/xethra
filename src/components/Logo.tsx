import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
};

export function Logo({ className = "", height = 40 }: LogoProps) {
  const w = Math.round(height * 2.2);
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 ${className}`}
    >
      <Image
        src="/xethra-logo.svg"
        alt="Xethra"
        width={w}
        height={height}
        className="object-contain p-1"
        style={{ height, width: "auto", maxWidth: w }}
        priority
        unoptimized
      />
    </div>
  );
}
