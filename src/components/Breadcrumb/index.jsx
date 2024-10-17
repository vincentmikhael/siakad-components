import { twMerge } from "tailwind-merge";
const Breadcrumb = ({ olClass, className, children, ...props }) => {
  const classOl =
    "inline-flex items-center space-x-3";
  return (
    <nav
      className={twMerge("flex ", className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className={twMerge(classOl, olClass)}>{children}</ol>
    </nav>
  );
};

export default Breadcrumb;
