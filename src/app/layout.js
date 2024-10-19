import { Urbanist } from "next/font/google"
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  display: "swap",
  preload: false,
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} bg-fade`}
      >
        {children}
      </body>
    </html>
  );
}
