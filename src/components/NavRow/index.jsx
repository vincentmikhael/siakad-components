import { twMerge } from "tailwind-merge";
const NavRow = ({ children, className = "" }) => {
  return (
    <div
      className={twMerge(
        "border-b border-white border-opacity-10 bg-primary-100 flex py-4 md:px-14 px-5 max-h-20 w-full justify-between items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default NavRow;
