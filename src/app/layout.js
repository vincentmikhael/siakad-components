import {Urbanist} from "next/font/google"
import "./globals.css";
import {ToastProvider} from "@/context/ToastContext";
import ClientProvider from "@context/QueryClient";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ['400', '500', '600'],
    display: "swap",
    preload: false,
});

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${urbanist.className} bg-fade`} suppressHydrationWarning={true}
        >
        <ToastProvider>
            <ClientProvider>
                {children}
            </ClientProvider>
        </ToastProvider>
        </body>
        </html>
    );
}
