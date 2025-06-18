import { createPortal } from 'react-dom';

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
            className="fixed inset-0 flex justify-center items-center z-50 text-primary dark:text-secondary"
            onClick={handleBackdropClick}
            data-testid="backdrop"
        >
            <div
                className="bg-secondary border border-primary shadow p-6 max-w-md w-full font-vt323 relative dark:bg-primary dark:border-secondary dark:shadow-dark"
                onClick={e => e.stopPropagation()}
                data-testid="modal-content"
            >
                <button onClick={onClose} className="absolute top-2 right-4 text-xl" aria-label="Close">
                    ×
                </button>
                <h3 className="text-xl mb-2 underline">How does it work?</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>
                        <strong>25 minutes</strong> of focused work → <strong>5-minute</strong> short break
                    </li>
                    <li>
                        After <strong>4 Pomodoro sessions</strong> → <strong>15-minute</strong> long break
                    </li>
                </ul>

                <h3 className="text-xl mb-2 underline">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Automatically switches between work and break sessions</li>
                    <li>
                        Track Pomodoros <strong>per task</strong>
                    </li>
                    <li>
                        Customize durations in the <strong>Settings</strong>
                    </li>
                    <li>
                        View progress in the <strong>Statistics</strong> section
                    </li>
                    <li>
                        Data stored <strong>locally</strong> – no login required
                    </li>
                </ul>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
}
