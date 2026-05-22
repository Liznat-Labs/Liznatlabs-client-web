"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqContent } from "@/content/site";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-cream"
        style={{ color: isOpen ? "var(--text)" : "var(--muted)" }}
      >
        <span
          className="font-geist"
          style={{ fontSize: "0.95rem", fontWeight: 400, lineHeight: 1.5 }}
        >
          {question}
        </span>

        {/* + rotates to Ã— */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="shrink-0 font-mono text-xl text-accent"
          style={{ lineHeight: 1, display: "block", width: 20, height: 20, textAlign: "center" }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            key="content"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-6 font-geist text-muted"
              style={{ fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 400 }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-7xl px-6 py-24 xl:px-8"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr]">
        {/* Left â€” heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="font-mono text-xs text-muted" style={{ letterSpacing: "0.12em" }}>
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="font-fraunces text-cream"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.1 }}
          >
            Questions, answered.
          </h2>
          <p
            className="mt-2 font-geist text-muted"
            style={{ fontSize: "0.875rem", lineHeight: 1.75, fontWeight: 400 }}
          >
            Can&apos;t find what you&apos;re looking for? Drop an email to{" "}
            <a
              href="mailto:hello@liznatlabs.com"
              className="text-accent underline-offset-2 hover:underline"
            >
              hello@liznatlabs.com
            </a>
          </p>
        </motion.div>

        {/* Right â€” accordion */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 }}
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {faqContent.map((item, i) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


