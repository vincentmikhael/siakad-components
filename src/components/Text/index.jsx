import { twMerge } from "tailwind-merge";

const sizeClasses = {
  xs: "text-[13px] leading-[20.8px]",
  sm: "text-sm leading-[22.4px]",
  base: "text-base leading-[22px]",
  lg: "text-lg leading-[27px]",
  xl: "text-xl leading-[30px]",
  "2xl": "text-2xl leading-[36px]",
  "3xl": "text-[32px] leading-[44.8px]",
  "4xl": "text-[40px] leading-[48px]",
  "5xl": "text-5xl leading-[57.6px]",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const weightClasses = {
  400: "font-normal",
  500: "font-medium",
  600: "font-semibold",
};

const spaceClasses = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
};

const whitespaceClasses = {
  normal: "whitespace-normal",
  nowrap: "whitespace-nowrap",
  pre: "whitespace-pre",
  preline: "whitespace-pre-line",
  prewrap: "whitespace-pre-wrap",
};

const Text = ({
  weight = "400",
  align = "left",
  size = "base",
  spaces = "normal",
  whitespace = "normal",
  italic = false,
  opacity = 100,
  color = "gray-100",
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
    `text-${color}`,
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
