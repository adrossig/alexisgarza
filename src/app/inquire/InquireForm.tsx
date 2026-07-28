"use client";

import { useState } from "react";

const projectTypes = [
  "Residential",
  "Hospitality",
  "Retail",
  "Renovation & styling",
  "Something else",
];

const fieldClass =
  "mt-3 w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-3 font-light text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-gold";

const labelClass = "label-caps block text-muted";

export default function InquireForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired up yet — this confirms the UI flow only.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-foreground/10 bg-card p-10">
        <p className="font-display text-3xl">Thank you.</p>
        <p className="mt-4 font-light text-muted">
          Your note is on its way. I&apos;ll be in touch within a few days to arrange a
          first conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className={labelClass}>
          First name
          <input
            required
            type="text"
            name="firstName"
            autoComplete="given-name"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Last name
          <input
            required
            type="text"
            name="lastName"
            autoComplete="family-name"
            className={fieldClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        Email address
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Project type
        <select name="projectType" defaultValue="" required className={fieldClass}>
          <option value="" disabled>
            Select a category...
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClass}>
        The vision
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Briefly describe the scope, location, and aspirations for your space..."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="label-caps bg-foreground px-10 py-4 text-background transition-colors hover:bg-accent"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
