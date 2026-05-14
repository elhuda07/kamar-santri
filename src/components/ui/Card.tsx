import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

export function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white rounded-xl p-6 shadow-sm",
    bordered: "bg-white rounded-xl p-6 border border-cream-200",
    elevated: "bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow",
  };

  return (
    <div className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
