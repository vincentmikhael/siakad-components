import { twMerge } from "tailwind-merge";

const DateItem = ({
  dateObj,
  onClick,
  isFromPreviousMonth,
  isFromNextMonth,
  selected,
}) => {
  const displayDate = dateObj ? dateObj.getDate() : null;

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "w-10 h-10 items-center flex justify-center hover:bg-fade hover:rounded-full hover:text-gray-100 hover:font-semibold",
        selected && "bg-primary-100 rounded-full font-semibold",
        selected
          ? "text-gray-10"
          : isFromPreviousMonth || isFromNextMonth
          ? "text-gray-50"
          : "text-gray-100"
      )}
    >
      <span className="text-sm">{displayDate !== null ? displayDate : ""}</span>
    </button>
  );
};

export default DateItem;
