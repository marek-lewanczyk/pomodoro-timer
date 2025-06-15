import type {ReactNode} from "react";

interface IconButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type?: string;
  className?: string;
  title?: string;
}

export default function IconButton({
  onClick,
  children,
  title,
  className,
}: IconButtonProps) {
  const baseClass =
    "p-2 font-pixel text-sm border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${className}`}
      title={title}
    >
      {children}
    </button>
  );
}
