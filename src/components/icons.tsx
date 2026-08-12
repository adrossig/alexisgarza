/**
 * Hairline arrow set, drawn to match the typographic weight of `.label-caps`.
 * SVG rather than glyphs so the stroke stays consistent across platforms and
 * the marks are hidden from assistive tech (their labels live on the control).
 */

type IconProps = {
  className?: string;
};

function Arrow({ rotate, className }: IconProps & { rotate: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4" }: IconProps) {
  return <Arrow rotate={0} className={className} />;
}

export function ArrowLeft({ className = "h-4 w-4" }: IconProps) {
  return <Arrow rotate={180} className={className} />;
}

export function ArrowDown({ className = "h-4 w-4" }: IconProps) {
  return <Arrow rotate={90} className={className} />;
}
