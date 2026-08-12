"use client";

import { useEffect, useRef, useState } from "react";

const projectTypes = [
  "Residential",
  "Hospitality",
  "Retail",
  "Renovation & styling",
  "Something else",
];

type FieldName = "firstName" | "lastName" | "email" | "projectType" | "message";
type Errors = Partial<Record<FieldName, string>>;

const fieldClass =
  "mt-3 w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-3 font-light text-foreground outline-none transition-colors placeholder:text-placeholder focus:border-gold";

const labelClass = "label-caps block text-muted";

/** Deliberately forgiving — this only catches obvious typos, the studio replies by hand. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const value = (name: FieldName) => String(data.get(name) ?? "").trim();
  const errors: Errors = {};

  if (!value("firstName")) errors.firstName = "Please add your first name.";
  if (!value("lastName")) errors.lastName = "Please add your last name.";

  const email = value("email");
  if (!email) errors.email = "Please add an email address.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "That email doesn't look right.";

  if (!value("projectType")) errors.projectType = "Please choose a project type.";
  if (value("message").length < 20) {
    errors.message = "A sentence or two about the space helps us reply properly.";
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <span id={id} className="mt-2 block text-sm font-light text-accent-strong">
      {message}
    </span>
  );
}

export default function InquireForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const confirmationRef = useRef<HTMLDivElement>(null);

  // Send focus to the confirmation so screen-reader and keyboard users land on it.
  useEffect(() => {
    if (submitted) confirmationRef.current?.focus();
  }, [submitted]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const found = validate(new FormData(form));
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // No backend wired up yet — this confirms the UI flow only.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        role="status"
        className="border border-foreground/10 bg-card p-10"
      >
        <p className="font-display text-3xl">Thank you.</p>
        <p className="mt-4 font-light text-muted">
          Your note is on its way. I&apos;ll be in touch within a few days to arrange a
          first conversation.
        </p>
      </div>
    );
  }

  const describedBy = (field: FieldName) =>
    errors[field] ? `${field}-error` : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className={labelClass}>
          First name
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={describedBy("firstName")}
            className={fieldClass}
          />
          <FieldError id="firstName-error" message={errors.firstName} />
        </label>
        <label className={labelClass}>
          Last name
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={describedBy("lastName")}
            className={fieldClass}
          />
          <FieldError id="lastName-error" message={errors.lastName} />
        </label>
      </div>

      <label className={labelClass}>
        Email address
        <input
          type="email"
          name="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("email")}
          className={fieldClass}
        />
        <FieldError id="email-error" message={errors.email} />
      </label>

      <label className={labelClass}>
        Project type
        <select
          name="projectType"
          defaultValue=""
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={describedBy("projectType")}
          className={`${fieldClass} cursor-pointer`}
        >
          <option value="" disabled>
            Select a category...
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldError id="projectType-error" message={errors.projectType} />
      </label>

      <label className={labelClass}>
        The vision
        <textarea
          name="message"
          rows={4}
          placeholder="Briefly describe the scope, location, and aspirations for your space..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          className={`${fieldClass} resize-y`}
        />
        <FieldError id="message-error" message={errors.message} />
      </label>

      <button
        type="submit"
        className="label-caps cursor-pointer bg-foreground px-10 py-4 text-background transition-colors hover:bg-accent"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
