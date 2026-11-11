"use client";

import { useState } from "react";
import Icon from "./Icons";

const topics = [
  { value: "support", label: "App support", email: "support@makebuddy.app" },
  { value: "billing", label: "Account & billing", email: "support@makebuddy.app" },
  { value: "safety", label: "Report a safety concern", email: "safety@makebuddy.app" },
  { value: "privacy", label: "Privacy request", email: "privacy@makebuddy.app" },
  { value: "partners", label: "Partnerships & press", email: "hello@makebuddy.app" },
];

/**
 * Contact form. There is no backend yet, so on submit it opens the visitor's
 * email app with everything pre-filled and addressed to the right team.
 * Swap `handleSubmit` for an API call (e.g. /api/contact) when you have one.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "support", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) e.message = "Please write a little more (at least 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const topic = topics.find((t) => t.value === form.topic);
    const subject = encodeURIComponent(`[${topic.label}] Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${topic.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "mt-2 w-full rounded-2xl bg-paper px-4 py-3.5 text-[15px] text-ink ring-1 ring-inset ring-ink/10 transition placeholder:text-ink/35 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-deep";

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-[2rem] bg-white p-8 text-ink shadow-card ring-1 ring-ink/5 sm:p-10">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-lime-neon">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.4} />
        </span>
        <h3 className="h-display mt-6 text-3xl">Thanks, {form.name.split(" ")[0]}!</h3>
        <p className="mt-3 max-w-sm text-ink/60">
          Your email app should have opened with your message ready to send. If it didn&apos;t, email us directly at{" "}
          <a className="font-semibold underline decoration-lime-deep decoration-2 underline-offset-4" href={`mailto:${topics.find((t) => t.value === form.topic).email}`}>
            {topics.find((t) => t.value === form.topic).email}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-primary mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 text-ink shadow-card ring-1 ring-ink/5 sm:p-10">
      <h2 className="h-display text-2xl sm:text-3xl">Send us a message</h2>
      <p className="mt-2 text-sm text-ink/55">We usually reply within 1–2 business days.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="text-sm font-medium">Your name</label>
          <input id="c-name" value={form.name} onChange={set("name")} autoComplete="name" placeholder="Alex Morgan" className={field} aria-invalid={!!errors.name} aria-describedby="c-name-err" />
          {errors.name && <p id="c-name-err" className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className="text-sm font-medium">Email</label>
          <input id="c-email" type="email" value={form.email} onChange={set("email")} autoComplete="email" placeholder="you@example.com" className={field} aria-invalid={!!errors.email} aria-describedby="c-email-err" />
          {errors.email && <p id="c-email-err" className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">What can we help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t) => (
            <label key={t.value} className="cursor-pointer">
              <input type="radio" name="topic" value={t.value} checked={form.topic === t.value} onChange={set("topic")} className="peer sr-only" />
              <span className="inline-block rounded-full px-4 py-2 text-sm ring-1 ring-inset ring-ink/10 transition hover:ring-ink/30 peer-checked:bg-ink peer-checked:text-white peer-checked:ring-ink peer-focus-visible:ring-2 peer-focus-visible:ring-lime-deep">
                {t.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="c-msg" className="text-sm font-medium">Message</label>
        <textarea id="c-msg" rows={5} value={form.message} onChange={set("message")} placeholder="Tell us a bit about what's going on…" className={`${field} resize-y`} aria-invalid={!!errors.message} aria-describedby="c-msg-err" />
        {errors.message && <p id="c-msg-err" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink/45">
          By sending this you agree to our{" "}
          <a href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</a>.
        </p>
        <button type="submit" className="btn-primary group shrink-0">
          Send message
          <span className="btn-arrow bg-lime-neon text-ink">
            <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
        </button>
      </div>
    </form>
  );
}
