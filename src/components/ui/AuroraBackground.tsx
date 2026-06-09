export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: "#FFFFFF" }} />
      <div className="noise-overlay" />
    </div>
  );
}
