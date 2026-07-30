type WordmarkProps = { tone?: "light" | "dark"; className?: string };

export default function Wordmark({
  tone = "light",
  className = "",
}: WordmarkProps) {
  const nameColor = tone === "light" ? "text-ink" : "text-white";
  const accentColor = tone === "light" ? "text-accent" : "text-accent-bright";
  const subColor = tone === "light" ? "text-muted" : "text-white/50";

  return (
    <span className={`flex items-baseline gap-2 ${className}`}>
      <span
        className={`font-display text-[20px] font-bold tracking-[-0.035em] ${nameColor}`}
      >
        <span className={accentColor}>M</span>akstribe
      </span>
      <span className={`label hidden sm:block ${subColor}`}>Consult LLP</span>
    </span>
  );
}
