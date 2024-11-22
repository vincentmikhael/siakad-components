import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import {
    sizeClasses,
    weightClasses,
    spaceClasses,
    alignClasses,
    whitespaceClasses
} from "@components/Text/StandardClasses";
// import {default as Text} from "@components/Text";
const TextWithRef = forwardRef(function Text
        (
            {
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
            },
            ref
        ) {
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
            <Wrapper ref={ref} className={textClasses} {...props}>
                {children}
            </Wrapper>
        );
    }
);

export default TextWithRef;
