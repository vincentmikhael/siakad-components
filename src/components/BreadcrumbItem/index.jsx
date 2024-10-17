import { twMerge } from "tailwind-merge";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Link, Text } from "..";

const BreadcrumbItem = ({
  home = false,
  href,
  className,
  classHome,
  classLink,
  classSpan,
  children,
  ...props
}) => {
  return (
    <li
      className={twMerge("inline-flex items-center space-x-3", className)}
      {...props}
    >
      {home ? (
        <Link
          className={twMerge(
            "inline-flex items-center text-sm font-normal text-gray-10",
            classHome
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <>
          <CaretRight size={16} weight="bold" />
          {href ? (
            <Link
              className={twMerge("text-sm font-normal text-gray-10", classLink)}
              href={href}
            >
              {children}
            </Link>
          ) : (
            <Text tag="span" size="sm" weight="400" color="gray-30" className={classSpan}>
              {children}
            </Text>
          )}
        </>
      )}
    </li>
  );
};

export default BreadcrumbItem;
