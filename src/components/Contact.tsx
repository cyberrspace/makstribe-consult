"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { serviceOptions, site } from "@/lib/site";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import AnimatedHeading from "./ui/AnimatedHeading";
import CTAButton from "./ui/CTAButton";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const emptyForm = { name: "", email: "", service: "", message: "", company: "" };

const fieldClass =
  "w-full rounded-xl border border-rule bg-paper-raised px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

const labelClass = "mb-2 block text-[13px] font-medium text-ink/70";

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (key: keyof typeof emptyForm) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot: real people never fill this in.
    if (form.company) return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setError("Add your name, email and a short description of the project.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setError(
        `Email is not configured yet. Reach us directly at ${site.email}.`
      );
      return;
    }

    setStatus("sending");
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          service: form.service || "Not specified",
          message: form.message,
          to_email: site.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("error");
      setError(
        `That did not send. Try again, or email us directly at ${site.email}.`
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <Eyebrow>Start a project</Eyebrow>

            <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.25rem)]">
              <AnimatedHeading text="Tell us what you are // working on." />
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                Send a few details about your project and we will come back within one
                business day with next steps — or with a referral if it is not a fit for
                us.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-12 space-y-8">
                <div>
                  <dt className="label text-muted">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-display text-[19px] font-semibold tracking-[-0.02em] underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Hours</dt>
                  <dd className="mt-2 font-display text-[19px] font-semibold tracking-[-0.02em]">
                    {site.hours}
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted">Coverage</dt>
                  <dd className="mt-2 font-display text-[19px] font-semibold tracking-[-0.02em]">
                    {site.coverage}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-rule bg-paper-raised p-7 shadow-[0_30px_70px_-50px_rgba(12,31,38,0.5)] sm:p-9">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-[420px] flex-col items-start justify-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
                      &#10003;
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em]">
                      Message sent
                    </h3>
                    <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                      Thanks — we have got your project details. Expect a reply from{" "}
                      {site.email} within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-[15px] font-medium text-accent-deep underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="name">
                          Your name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          className={fieldClass}
                          value={form.name}
                          onChange={(e) => update("name")(e.target.value)}
                          placeholder="Jane Okafor"
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className={fieldClass}
                          value={form.email}
                          onChange={(e) => update("email")(e.target.value)}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className={labelClass} htmlFor="service">
                        What can we help with?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className={fieldClass}
                        value={form.service}
                        onChange={(e) => update("service")(e.target.value)}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-5">
                      <label className={labelClass} htmlFor="message">
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`${fieldClass} resize-y`}
                        value={form.message}
                        onChange={(e) => update("message")(e.target.value)}
                        placeholder="A few sentences on what you are trying to achieve, your timeline, and anything else we should know."
                      />
                    </div>

                    {/* Honeypot — hidden from people, tempting to bots */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.company}
                        onChange={(e) => update("company")(e.target.value)}
                      />
                    </div>

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700"
                          role="alert"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="mt-7">
                      <CTAButton
                        type="submit"
                        variant="solid"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Sending…" : "Send message"}
                      </CTAButton>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
