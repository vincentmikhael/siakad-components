import {twMerge} from "tailwind-merge";

export default function Footer({children, className, ...props}) {
    const year = new Date().getFullYear();
    return (
        <footer className={twMerge("bg-white py-2", className)} {...props}>
            <div className="text-center text-gray-50 text-sm">
                {children ?? <p>Copyright © {year} ITN Malang</p>}
            </div>
        </footer>
    )
}