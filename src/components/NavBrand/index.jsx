import { twMerge } from "tailwind-merge";
import { Link } from "..";
const NavBrand = ({children, className, href="", ...props}) => {
  return (
    <Link href={href} className={twMerge("md:flex items-center hidden", className)} {...props}>
      {children}
    </Link>
  );
};

export default NavBrand;
