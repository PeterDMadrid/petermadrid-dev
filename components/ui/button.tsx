import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-none px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors",
        variant === "primary" &&
          "bg-gold text-ink hover:bg-paper",
        variant === "ghost" &&
          "border border-rule text-paper hover:border-gold hover:text-gold",
        className
      )}
      {...props}
    />
  );
}
