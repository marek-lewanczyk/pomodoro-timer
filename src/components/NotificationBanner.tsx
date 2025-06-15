interface Props {
    message: string;
    visible: boolean;
}

export default function NotificationBanner({ message, visible }: Props) {
    if (!visible) return null;

    return (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-yellow-300 border border-black text-black font-vt323 text-lg px-6 py-2 shadow-[3px_3px_0_black] z-50">
            {message}
        </div>
    );
}
