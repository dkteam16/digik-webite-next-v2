"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm({
  inputClassName,
  buttonClassName,
}: {
  inputClassName: string;
  buttonClassName: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={status === "submitted" ? "Thanks — you're subscribed!" : "EMAIL ADDRESS"}
        className={`${inputClassName} px-4 font-days-one text-[17px] leading-[11.5px] text-[rgba(0,0,0,0.38)] placeholder:text-[rgba(0,0,0,0.38)] tracking-[-0.34px] uppercase outline-none`}
      />
      <button
        type="submit"
        className={`${buttonClassName} flex items-center justify-center font-days-one text-[17px] text-white tracking-[-0.34px] uppercase hover:opacity-90 transition-opacity`}
      >
        Submit
      </button>
    </form>
  );
}
