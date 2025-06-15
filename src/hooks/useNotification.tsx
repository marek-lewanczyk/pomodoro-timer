import {useState} from "react";

export function useNotification(duration = 3000) {
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(false);

    const showNotification = (msg: string) => {
        setMessage(msg);
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, duration);
    };

    return { message, visible, showNotification };
}
