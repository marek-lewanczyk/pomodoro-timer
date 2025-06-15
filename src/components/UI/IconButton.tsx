import type {ReactNode} from "react";
import {Link} from "react-router";

interface IconButtonProps {
  onClick?: () => void;
  children: ReactNode;
  to?: string;
  className?: string;
  title?: string;
}

export default function IconButton({
  onClick,
  children,
  title,
  className,
  to,
}: IconButtonProps) {
  const baseClass =
    "p-2 font-pixel text-sm border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition";

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
      title={title}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
}
