import React from "react";
import type {ErrorBoundaryProps, ErrorBoundaryState} from "@/types/ui.ts";

export default class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 text-center font-vt323 text-xl border border-primary shadow bg-secondary dark:border-secondary dark:bg-primary dark:shadow-dark">
                    <h3 className="mb-2">Something went wrong!</h3>
                    <p className="text-base">{this.state.error?.message}</p>
                </div>
            );
        }

        return this.props.children;
    }
}
