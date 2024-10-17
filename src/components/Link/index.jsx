import { twMerge } from "tailwind-merge";
import NextLink from "next/link";
const Link = ({ children, href, className, ...props }) => {
  return (
    <NextLink
      href={href}
      className={twMerge("text-base font-semibold text-primary-100", className)}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
