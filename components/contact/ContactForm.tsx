"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/forms/schemas";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { FiCheck } from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Nepodařilo se odeslat zprávu.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Neznámá chyba.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
          <FiCheck className="w-7 h-7 text-success" />
        </div>
        <h3 className="text-xl font-black text-foreground mb-1">Odesláno!</h3>
        <p className="text-sm text-muted">Ozveme se vám co nejdříve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Jméno"
        {...register("name")}
        error={errors.name?.message}
        placeholder="Jan Novák"
      />
      <Input
        label="E-mail"
        type="email"
        {...register("email")}
        error={errors.email?.message}
        placeholder="jan@example.cz"
      />
      <Input
        label="Telefon (volitelné)"
        type="tel"
        {...register("phone")}
        placeholder="+420 777 123 456"
      />
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-foreground">
          Zpráva
        </label>
        <textarea
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 resize-none"
          rows={5}
          placeholder="Popište, s čím vám můžeme pomoci..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <p className="text-sm text-red-400">{serverError}</p>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
      </Button>
    </form>
  );
}
