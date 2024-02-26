export interface ToastContextType {
    showToast: ({type, title, message}: ToastProps) => void;
    hideToast: () => void;
    toast: ToastProps | null;
}

export interface ToastProviderProps {
    children: React.ReactNode;
}

export interface ToastProps {
    type: string,
    title: string,
    message: string
}