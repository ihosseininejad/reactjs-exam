import { createContext, useState } from 'react';
import { ToastContextType, ToastProps, ToastProviderProps } from '../types/context/toastcontext.types';

export const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toast, setToast] = useState<ToastProps | null>(null);

    const showToast = ({type, title, message} : ToastProps) => {
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
