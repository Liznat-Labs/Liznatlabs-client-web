"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type FormState = "idle" | "sending" | "success" | "error";

export function BookCallModal() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-book-call", handler);
    return () => window.removeEventListener("open-book-call", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  function close() {
    setOpen(false);
    if (formState === "success") {
      setTimeout(() => {
        setFormState("idle");
        setName(""); setEmail(""); setPhone(""); setProjectType(""); setMessage("");
      }, 300);
    } else {
      setFormState("idle");
      setErrorMsg("");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, projectType, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setFormState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setFormState("error");
    }
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border)",
    fontSize: "0.875rem",
  } as const;

  const focusAccent = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderColor = "var(--accent)");
  const blurBorder = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderColor = "var(--border)");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: "rgba(10,10,8,0.85)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            key="modal"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full max-w-lg rounded-sm p-5 sm:p-8"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-sm text-muted transition-colors hover:text-cream"
              style={{ border: "1px solid var(--border)" }}
              aria-label="Close modal"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {formState === "success" ? (
              <div className="flex flex-col items-center gap-6 py-8 text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "rgba(109, 40, 217,0.1)", border: "1px solid rgba(109, 40, 217,0.3)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10L8 14L16 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-fraunces text-cream" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                    Message sent!
                  </h2>
                  <p className="mt-2 font-geist text-muted" style={{ fontSize: "0.875rem" }}>
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="shimmer-btn inline-flex items-center rounded-sm bg-accent px-6 py-2.5 font-mono text-xs text-bg transition-opacity hover:opacity-80"
                  style={{ letterSpacing: "0.04em" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="mb-2 block font-mono text-xs text-muted" style={{ letterSpacing: "0.12em" }}>
                    START A PROJECT
                  </span>
                  <h2
                    id="modal-title"
                    className="font-fraunces text-cream"
                    style={{ fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.1 }}
                  >
                    Let&apos;s build something real.
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-name" className="font-mono text-xs text-muted" style={{ letterSpacing: "0.06em" }}>
                        NAME *
                      </label>
                      <input
                        id="modal-name"
                        ref={firstInputRef}
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-sm px-3 py-2.5 font-geist text-sm text-cream outline-none transition-all"
                        style={inputStyle}
                        onFocus={focusAccent}
                        onBlur={blurBorder}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="modal-email" className="font-mono text-xs text-muted" style={{ letterSpacing: "0.06em" }}>
                        EMAIL *
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-sm px-3 py-2.5 font-geist text-sm text-cream outline-none transition-all"
                        style={inputStyle}
                        onFocus={focusAccent}
                        onBlur={blurBorder}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-phone" className="font-mono text-xs text-muted" style={{ letterSpacing: "0.06em" }}>
                      PHONE
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="rounded-sm px-3 py-2.5 font-geist text-sm text-cream outline-none transition-all"
                      style={inputStyle}
                      onFocus={focusAccent}
                      onBlur={blurBorder}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-project" className="font-mono text-xs text-muted" style={{ letterSpacing: "0.06em" }}>
                      PROJECT TYPE
                    </label>
                    <select
                      id="modal-project"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="rounded-sm px-3 py-2.5 font-geist text-sm outline-none transition-all"
                      style={{
                        ...inputStyle,
                        color: projectType ? "var(--text)" : "var(--muted)",
                      }}
                      onFocus={focusAccent}
                      onBlur={blurBorder}
                    >
                      <option value="" disabled>Select a type…</option>
                      <option value="Website">Website</option>
                      <option value="Android App">Android App</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-message" className="font-mono text-xs text-muted" style={{ letterSpacing: "0.06em" }}>
                      TELL ME ABOUT YOUR PROJECT *
                    </label>
                    <textarea
                      id="modal-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What are you building? What's the timeline? Any other context…"
                      className="resize-none rounded-sm px-3 py-2.5 font-geist text-sm text-cream outline-none transition-all"
                      style={inputStyle}
                      onFocus={focusAccent}
                      onBlur={blurBorder}
                    />
                  </div>

                  {formState === "error" && (
                    <p className="font-mono text-xs" style={{ color: "#ef4444" }}>
                      {errorMsg || "Something went wrong. Please try again."}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="shimmer-btn mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 font-mono text-xs font-medium text-bg transition-all duration-200 disabled:opacity-60"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {formState === "sending" ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="3"
                            strokeDasharray="60" strokeDashoffset="20"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send message →"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
