'use client'
import {ArrowLeft} from "@phosphor-icons/react/dist/ssr";
import {Button} from "@/components";
import {useRouter} from "next/navigation";

const ButtonRedirectBack = ({
                                type = "button",
                                variant = "white",
                                size = "sm",
                                leftIcon = <ArrowLeft weight="bold"/>,
                                referrer = "",
                                url = undefined,
                                rightIcon,
                                children,
                                onClick,
                                className,
                                disabled = false,
                                fullWidth = false,
                                filled = true,
                                ...props
                            }) => {
    const router = useRouter();
    const goBack = () => {
        if (referrer) {
            router.push(referrer); // Redirect to the referrer URL
        } else if (url) {
            router.push(url);
        } else {
            router.back(); // Fallback to browser history
        }
    };
    return <Button onClick={onClick ?? goBack} className={className} leftIcon={leftIcon} rightIcon={rightIcon}
                   filled={filled} variant={variant ?? "white"}
                   size={size ?? "sm"} type={type ?? "button"} disabled={disabled} fullWidth={fullWidth} {...props}>
        {children ?? "Kembali ke Halaman Sebelumnya"}
    </Button>
}


export default ButtonRedirectBack;