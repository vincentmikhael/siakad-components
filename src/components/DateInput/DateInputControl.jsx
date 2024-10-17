import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Text } from "..";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DateInputControl = ({
  navigateToNextMonth,
  navigateToPrevMonth,
  currentMonth,
  currentYear,
}) => {
  return (
    <div className="flex justify-between items-center">
      <button
        className="text-gray-100"
        type="button"
        onClick={navigateToPrevMonth}
        aria-label="Previous Month"
      >
        <CaretLeft size={20} weight="bold" />
      </button>
      <Text tag="span" align="center" weight="600" size="md">
        {`${monthNames[currentMonth]} ${currentYear}`}
      </Text>
      <button
        className="text-gray-100"
        type="button"
        onClick={navigateToNextMonth}
        aria-label="Next Month"
      >
        <CaretRight size={20} weight="bold" />
      </button>
    </div>
  );
};

export default DateInputControl;
