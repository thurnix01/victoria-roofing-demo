"use client";

import { FormEvent, useMemo, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[0-9()\-\s]{10,20}$/;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
};

export default function LeadForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL;

  const isMissingConfig = useMemo(() => !clientEmail, [clientEmail]);

  function validate(current: FormValues): FieldErrors {
    const nextErrors: FieldErrors = {};

    if (!current.name.trim()) {
      nextErrors.name = "Your name is required.";
    }

    if (!EMAIL_REGEX.test(current.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!PHONE_REGEX.test(current.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    return nextErrors;
  }

  function onChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError("");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const supabase = getSupabaseClient();

    if (Object.keys(nextErrors).length > 0 || isMissingConfig || !supabase) {
      if (isMissingConfig) {
        setSubmitError("Form is temporarily unavailable. Please call us directly.");
      } else if (!supabase) {
        setSubmitError("Form is temporarily unavailable. Please call us directly.");
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      business_name: "",
      source: "victoria-roofing-demo",
      client_email: clientEmail,
    };

    const { error } = await supabase.from("leads").insert([payload]);

    setIsSubmitting(false);

    if (error) {
      setSubmitError(
        "We could not submit your request right now. Please try again or call 250-555-0198."
      );
      return;
    }

    setIsSuccess(true);
    setValues(initialValues);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
      <h3 className="text-2xl font-semibold text-slate-900">Request Your Free Quote</h3>
      <p className="mt-2 text-sm text-slate-600">
        Tell us a bit about your roof and we will get back to you within one business day.
      </p>

      {isSuccess && (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
          Thanks! Your quote request has been sent. Our Victoria team will contact you shortly.
        </div>
      )}

      {submitError && (
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {submitError}
        </div>
      )}

      <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => onChange("name", event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="Jordan McMillan"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-rose-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => onChange("email", event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-rose-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
            placeholder="250-555-0198"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-rose-600">
              {errors.phone}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isMissingConfig}
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isSubmitting ? "Submitting..." : "Request Free Quote"}
        </button>
      </form>
    </div>
  );
}
