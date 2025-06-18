import type { NotificationProps } from '@/types/notification.ts';

export default function Notification({ message, className = '' }: NotificationProps) {
    return (
        <div className={`border-primary bg-secondary text-primary font-vt323 fixed top-6 right-6 z-50 border px-6 py-3 text-lg shadow ${className}`}>
            {message}
        </div>
    );
}
