import type { NotificationProps } from '@/types/notification.ts';

export default function Notification({ message, className = '' }: NotificationProps) {
    return (
        <div className={`fixed top-6 right-6 px-6 py-3 border border-primary bg-secondary text-primary shadow font-vt323 text-lg z-50 ${className}`}>
            {message}
        </div>
    );
}
