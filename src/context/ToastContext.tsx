import { createContext, useState } from 'react';

export interface ToastContextType {
    showToast: ({type, title, message}: ShowToast) => void;
    hideToast: () => void;
    toast: { type: string, title: string, message: string } | null;
}

export const ToastContext = createContext<ToastContextType | null>(null);

interface ToastProviderProps {
    children: React.ReactNode;
}

type ShowToast = {
    type: string,
    title: string,
    message: string
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toast, setToast] = useState<{ type: string, title: string, message: string } | null>(null);

    const showToast = ({type, title, message} : ShowToast) => {
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
