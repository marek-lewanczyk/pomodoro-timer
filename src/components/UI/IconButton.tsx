import type {ReactNode} from "react";

interface IconButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    title?: string;
}

export default function IconButton({ onClick, children, title }: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            className="p-2 font-pixel text-sm bg-white text-black border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white"
            title={title}
        >
            {children}
        </button>
    );
}
