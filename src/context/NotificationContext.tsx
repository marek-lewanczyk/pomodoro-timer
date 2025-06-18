import {createContext, useContext, useState} from "react";
import {createPortal} from "react-dom";

interface NotificationContextType {
    message: string | null;
    showNotification: (msg: string) => void;
}

const NotificationContext = createContext<NotificationContextType>({
    message: null,
    showNotification: () => {},
});

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [message, setMessage] = useState<string | null>(null);

    const showNotification = (msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000); // 3 sekundy
    };

    return (
        <NotificationContext.Provider value={{ message, showNotification }}>
            {children}
            {message &&
                createPortal(
                    <div className="fixed top-6 right-6 px-6 py-3 border border-primary bg-secondary text-primary shadow font-vt323 text-lg z-50">
                        {message}
                    </div>,
                    document.getElementById("modal-root")!
                )
            }
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
