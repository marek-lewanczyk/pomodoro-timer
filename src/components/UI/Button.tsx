import type {ReactNode} from "react";
import {Link} from "react-router";

interface IconButtonProps {
  onClick?: () => void;
  children: ReactNode;
  to?: string;
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
  className?: string;
  title?: string;
}

export default function Button({
  onClick,
  children,
  title,
  to,
  type,
  className,
  isActive,
}: IconButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center h-12 w-auto p-2 font-pixel text-sm border border-primary shadow hover:bg-primary hover:text-secondary transition active:scale-95";

  if (to) {
    return (
        <Link to={to} title={title} className={`btn-link ${baseClass} ${className}`}>
          {children}
        </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={`${baseClass} ${
        isActive ? "bg-primary text-secondary" : "bg-secondary text-primary"
      }`}
    >
      {children}
    </button>
  );
}
