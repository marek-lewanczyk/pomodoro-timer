import type {ReactNode} from "react";
import {Link} from "react-router";

interface IconButtonProps {
  onClick?: () => void;
  children: ReactNode;
  to?: string;
  type?: "button" | "submit" | "reset";
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
}: IconButtonProps) {
  const baseClass =
      "inline-flex items-center justify-center h-12 w-auto p-2 font-pixel text-sm border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition active:scale-95";
  if (to) {
    return (
      <Link to={to} title={title} className={`${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
}
