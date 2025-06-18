import {NavLink} from "react-router";

import type {IconButtonProps} from "@/types/ui.ts";

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
    "inline-flex items-center justify-center h-12 w-auto p-2 font-pixel text-sm border border-primary shadow hover:bg-primary hover:text-secondary transition active:scale-95 dark:border-secondary dark:text-secondary dark:bg-primary dark:hover:bg-secondary dark:hover:text-primary dark:shadow-dark";

  if (to) {
    return (
        <NavLink
            to={to}
            title={title}
            className={
                `btn-link ${baseClass} ${className} ${
                    isActive
                        ? "bg-primary text-secondary dark:bg-secondary"
                        : "bg-secondary text-primary dark:bg-primary"
                }`
            }
        >
            {children}
        </NavLink>
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
