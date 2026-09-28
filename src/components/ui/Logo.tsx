interface LogoMarkProps {
  size?: number;
  className?: string;
}

/**
 * The Liznat Labs L-monogram mark.
 * L path fills with currentColor; accent square uses --accent.
 * ViewBox: 0 0 48 46 (38px mark + 10px right-margin for the floating square).
 */
export function LogoMark({ size = 28, className = "" }: LogoMarkProps) {
  return (
    <svg
      width={(48 / 46) * size}
      height={size}
      viewBox="0 0 48 46"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* L body */}
      <path d="M0 0 L14 0 L14 32 L38 32 L38 46 L0 46 Z" fill="currentColor" />
      {/* Accent square — floats to the right of the vertical stroke */}
      <rect x="22" y="4" width="10" height="10" fill="#3D7CFF" />
    </svg>
  );
}

interface LogoLockupProps {
  showWordmark?: boolean;
  size?: number;
  className?: string;
}

export function LogoLockup({
  showWordmark = true,
  size = 28,
  className = "",
}: LogoLockupProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span
          className="text-pearl"
          style={{ fontSize: size, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          Liznat Labs
        </span>
      )}
    </span>
  );
}
