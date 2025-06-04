import type { EmojiProps } from "@/types/emoji";

export default function Emoji({ symbol, label = '', className = '' }: EmojiProps) {
    return (
        <span
            role="img"
            aria-label={label}
            aria-hidden={label ? 'false' : 'true'}
            className={className}
        >
            {symbol}
        </span>
    )
}
