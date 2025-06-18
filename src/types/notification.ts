export type NotificationProps = {
    message: string;
    className?: string;
};

export interface NotificationContextType {
    message: string | null;
    showNotification: (msg: string) => void;
}
