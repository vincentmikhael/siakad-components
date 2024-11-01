import { twMerge } from "tailwind-merge";
const MenuUl = ({ children, className, ...props }) => {
  const baseClasses =
    "flex xl:flex-col flex-row gap-2 xl:max-w-[100%*0,18333333] max-w-full overflow-x-auto xl:overflow-x-clip invisible-overflow xl:border-0 border-b border-fade pb-6 mb-6";
  return (
    <ul className={twMerge(baseClasses, className, "over")} {...props}>
      {children}
    </ul>
  );
};

export default MenuUl;
