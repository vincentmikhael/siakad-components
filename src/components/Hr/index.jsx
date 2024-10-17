import { twMerge } from "tailwind-merge";

const Hr = ({
  icon = false,
  direction = "horizontal",
  children,
  classHr,
  className,
  classInnerDiv,
}) => {
  const divClass = `inline-flex items-center justify-center ${direction === 'horizontal' ? 'w-full' : 'w-fit'}`;
  const iconDivClass = "absolute left-1/2 px-4 bg-white transform -translate-x-1/2";
  const textSpanClass = "absolute px-2 text-sm text-gray-50 font-medium transform bg-white -translate-x-1/2 left-1/2";
  const innerDivClass = "absolute px-4 transform -translate-x-1/2 bg-white left-1/2";

  const directionClass = {
    horizontal: "h-[1px] w-full",
    vertical: "w-[1px] h-full",
  };
  const horizontalCls = twMerge("bg-fade border-0", directionClass[direction], classHr);
  const divCls = twMerge(divClass, "relative", className);
  const innerDivCls = twMerge(
    innerDivClass,
    icon ? iconDivClass : textSpanClass,
    classInnerDiv
  );

  return (
    <div className={divCls}>
      {children ? (
        <>
          <hr className={horizontalCls} />
          <div className={innerDivCls}>{children}</div>
        </>
      ) : (
        <hr className={horizontalCls} />
      )}
    </div>
  );
};

export default Hr;
