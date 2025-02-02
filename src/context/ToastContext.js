"use client";
import {createContext, useContext, useState, useCallback} from "react";
import {Toast} from "@/components";

const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({children}) => {
    const [toast, setToast] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const showToast = useCallback((title, message, status = "success", position = "top-right", dismissable = true, duration = 3000) => {
        const newToast = {title, message, status, position, dismissable};
        setToast(newToast);
        setIsVisible(true);

        // set a timeout to hide the toast after the duration
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, []);

    const removeToast = useCallback(() => {
        setIsVisible(false);
    }, []);

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {toast && (
                <Toast
                    title={toast.title}
                    message={toast.message}
                    status={toast.status}
                    dismissable={toast.dismissable}
                    isVisible={isVisible}
                    onDismiss={removeToast}
                />
            )}
        </ToastContext.Provider>
    );
};
