import {createPortal} from "react-dom";

interface HelpModalProps {
    onClose: () => void;
}

export default function HelpModal({ onClose }: HelpModalProps) {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 flex justify-center items-center z-50"
            onClick={handleBackdropClick}
        >
            <div
                className="bg-white dark:bg-black border-2 border-black dark:border-white shadow-[3px_3px_0_black] dark:shadow-[3px_3px_0_white] p-6 max-w-md w-full font-vt323 text-base relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-xl"
                    aria-label="Zamknij"
                >
                    ×
                </button>
                <h2 className="text-2xl mb-4">Jak działa Pomodoro?</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>25 min pracy → 5 min przerwy</li>
                    <li>Po 4 cyklach pracy → 15 min przerwy</li>
                    <li>Możesz śledzić liczbę pomodoro dla każdego zadania</li>
                    <li>Dostosuj długość sesji w ustawieniach</li>
                    <li>Statystyki są zapisywane lokalnie</li>
                </ul>
            </div>
        </div>,
        document.getElementById("modal-root")!
    );
}
