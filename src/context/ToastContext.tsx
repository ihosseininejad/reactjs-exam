import { createContext, useState, ReactNode } from 'react';

export interface ToastContextType {
    showToast: (type: string, title: string, message: string) => void;
    hideToast: () => void;
    toast: { type: string, title: string, message: string } | null;
}

export const ToastContext = createContext<ToastContextType | null>(null);

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toast, setToast] = useState<{ type: string, title: string, message: string } | null>(null);

    const showToast = (type: string, title: string, message: string) => {
        setToast({ type, title, message });
        setTimeout(() => {
            hideToast();
        }, 3000);
    };

    const hideToast = () => {
        setToast(null);
    };

    return (
        <ToastContext.Provider value={{ showToast, hideToast, toast }}>
            {children}
        </ToastContext.Provider>
    );
};
