import { Link } from "..";
import { twMerge } from "tailwind-merge";

const Card = ({ className, children, href, ...rest }) => {
  const Wrapper = href ? Link : "div";
  return (
    <div
      className={twMerge("bg-white gap-6 rounded-[20px] lg:p-8 p-6", className)}
      {...rest}
    >
      <Wrapper href={href}>{children}</Wrapper>
    </div>
  );
};

export default Card;
