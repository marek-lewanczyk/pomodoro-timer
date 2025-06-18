import {useState} from "react";
import Button from "@/components/UI/Button.tsx";
import {ChartBarIcon, ClockIcon, Cog6ToothIcon, InformationCircleIcon} from "@heroicons/react/16/solid";
import HelpModal from "@/components/UI/HelpModal.tsx";
import {useLocation} from "react-router";

export default function Navbar() {
    const [showHelp, setShowHelp] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    return (
        <nav className="flex justify-center gap-4 py-4">
            <Button to="/" title="Timer" isActive={path === "/"}>
                <ClockIcon className="h-8 w-8" />
            </Button>

            <Button to="/statistics" title="Stats" isActive={path === "/statistics"}>
                <ChartBarIcon className="h-8 w-8" />
            </Button>

            <Button to="/settings" title="Settings" isActive={path === "/settings"}>
                <Cog6ToothIcon className="w-8 h-8" />
            </Button>

            <Button onClick={() => setShowHelp(true)} title="Help">
                <InformationCircleIcon className="h-8 w-8" />
            </Button>

            {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
        </nav>
    );
}
