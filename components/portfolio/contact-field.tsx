"use client";

import { cn } from "@/lib/utils";

type FieldType = "text" | "email";

interface ContactFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  type?: FieldType;
  as?: "input" | "textarea";
  rows?: number;
}

const fieldClassName = "theme-input";

export function ContactField({
  label,
  name,
  id,
  placeholder,
  type = "text",
  as = "input",
  rows = 1,
}: ContactFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-zinc-100">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required
          rows={rows}
          placeholder={placeholder}
          className={cn(fieldClassName, "min-h-[160px] resize-none")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className={fieldClassName}
        />
      )}
    </div>
  );
}
