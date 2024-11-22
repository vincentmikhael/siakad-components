import {twMerge} from "tailwind-merge";
import {
    sizeClasses,
    weightClasses,
    spaceClasses,
    alignClasses,
    whitespaceClasses
} from "./StandardClasses";

const Text = ({
                  weight = "400",
                  align = "left",
                  size = "base",
                  spaces = "normal",
                  whitespace = "normal",
                  italic = false,
                  opacity = 100,
                  color = "text-gray-100",
                  className,
                  children,
                  tag = "p",
                  ...props
              }) => {
    const textClasses = twMerge(
        weightClasses[weight],
        alignClasses[align],
        sizeClasses[size],
        spaceClasses[spaces],
        whitespaceClasses[whitespace],
        italic && "italic",
        color,
        `opacity-${opacity}`,
        className
    );

    const Wrapper = tag;
    return (
        <Wrapper className={textClasses} {...props}>
            {children}
        </Wrapper>
    );
};

export default Text;
