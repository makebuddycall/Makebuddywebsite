"use client";

import { useState } from "react";
import Icon from "./Icons";

const DELETE_EMAIL = "privacy@makebuddy.app";

const reasons = [
  "I don't use the app anymore",
  "I'm worried about my privacy",
  "I made a new account",
  "I had a bad experience",
  "Other / prefer not to say",
];

/**
 * Web account-deletion request.
 * There is no backend yet, so on submit it opens the visitor's email app with a
 * pre-filled request to the privacy team. Swap `submit` for an API call when ready.
 */
export default function DeleteRequestForm() {
  const [form, setForm] = useState({ email: "", username: "", reason: reasons[4], confirm: false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter the email address linked to your Make Buddy account.";
    if (!form.confirm) e.confirm = "Please confirm you understand deletion is permanent.";
    setErrors(e);
    if (Object.keys(e).length) return;

    const subject = encodeURIComponent("Account deletion request");
    const body = encodeURIComponent(
      [
        "Please permanently delete my Make Buddy account and associated data.",
        "",
        `Account email: ${form.email}`,
        `Username: ${form.username || "(not provided)"}`,
        `Reason: ${form.reason}`,
        "",
        "I understand that deletion is permanent and cannot be undone.",
      ].join("\n")
    );
    window.location.href = `mailto:${DELETE_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "mt-2 w-full rounded-2xl bg-paper px-4 py-3.5 text-[15px] text-ink ring-1 ring-inset ring-ink/10 transition placeholder:text-ink/35 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime-deep";

  if (sent) {
    return (
      <div className="rounded-[2rem] bg-white p-8 text-ink ring-1 ring-ink/5 sm:p-10">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-lime-neon">
          <Icon name="check" className="h-6 w-6" strokeWidth={2.4} />
        </span>
        <h3 className="h-display mt-6 text-3xl">Request ready to send</h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink/60">
          Your email app should have opened with the request filled in — just press send. Please send it from{" "}
          <strong className="font-semibold text-ink">{form.email}</strong> so we can verify it&apos;s you. If nothing opened,
          email{" "}
          <a href={`mailto:${DELETE_EMAIL}?subject=Account%20deletion%20request`} className="font-semibold underline decoration-lime-deep decoration-2 underline-offset-4">
            {DELETE_EMAIL}
          </a>{" "}
          with the subject “Account deletion request”.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-8 hover:bg-paper">
          Back to form
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="rounded-[2rem] bg-white p-6 text-ink ring-1 ring-ink/5 sm:p-10">
      <h3 className="h-display text-2xl sm:text-3xl">Request account deletion</h3>
      <p className="mt-2 text-sm text-ink/55">For when you can&apos;t access the app. We&apos;ll confirm by email before deleting.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="d-email" className="text-sm font-medium">Account email</label>
          <input id="d-email" type="email" value={form.email} onChange={set("email")} autoComplete="email" placeholder="you@example.com" className={field} aria-invalid={!!errors.email} aria-describedby="d-email-err" />
          {errors.email && <p id="d-email-err" className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="d-user" className="text-sm font-medium">
            Username <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <input id="d-user" value={form.username} onChange={set("username")} placeholder="@yourname" className={field} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="d-reason" className="text-sm font-medium">
          Why are you leaving? <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <select id="d-reason" value={form.reason} onChange={set("reason")} className={`${field} appearance-none`}>
          {reasons.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl bg-paper p-4 ring-1 ring-inset ring-ink/5">
        <input type="checkbox" checked={form.confirm} onChange={set("confirm")} className="mt-0.5 h-5 w-5 shrink-0 accent-[#111114]" aria-describedby="d-confirm-err" />
        <span className="text-sm leading-relaxed text-ink/70">
          I understand that deleting my account is <strong className="font-semibold text-ink">permanent</strong>. My profile,
          messages, connections and wellness history will be erased and can&apos;t be recovered.
        </span>
      </label>
      {errors.confirm && <p id="d-confirm-err" className="mt-1.5 text-xs text-red-600">{errors.confirm}</p>}

      <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-ink-soft sm:w-auto">
        <Icon name="close" className="h-4 w-4 text-petal" strokeWidth={2.4} />
        Request permanent deletion
      </button>
    </form>
  );
}
