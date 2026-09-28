"use client";

import { useState } from "react";
import { contactPage } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-teal-lt bg-white px-4 py-3.5 text-ink placeholder:text-ink-soft/60 outline-none transition-[border-color,box-shadow] focus:border-teal focus:shadow-[0_0_0_3px_rgba(0,96,120,0.12)]";

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="kicker !text-[0.64rem] text-teal">{label}</label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-6 rounded-card border border-teal-lt bg-sky p-10" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">✓</span>
        <p className="text-2xl font-light text-ink">{contactPage.success}</p>
        <button type="button" onClick={() => setStatus("idle")} className="kicker text-teal hover:text-coral-tx">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="c-name" label="Name *">
          <input id="c-name" name="name" type="text" required autoComplete="name" maxLength={200} className={inputCls} />
        </Field>
        <Field id="c-email" label="Email *">
          <input id="c-email" name="email" type="email" required autoComplete="email" maxLength={320} className={inputCls} />
        </Field>
        <Field id="c-phone" label="Phone (optional)">
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" maxLength={40} className={inputCls} />
        </Field>
        <Field id="c-company" label="Company">
          <input id="c-company" name="company" type="text" autoComplete="organization" maxLength={200} className={inputCls} />
        </Field>
      </div>
      <Field id="c-interest" label="I'm interested in">
        <select id="c-interest" name="projectType" defaultValue="" className={`${inputCls} appearance-none`}>
          <option value="" disabled>Select an option…</option>
          {contactPage.interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </Field>
      <Field id="c-message" label="Message *">
        <textarea id="c-message" name="message" required rows={5} maxLength={5000} placeholder={contactPage.messagePlaceholder} className={`${inputCls} resize-y`} />
      </Field>

      {/* Honeypot: hidden from people, often filled in by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="c-website">Company website</label>
        <input id="c-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && <p role="alert" className="text-sm text-coral-dp">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,96,120,0.25)] transition-colors hover:bg-teal-dk disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
