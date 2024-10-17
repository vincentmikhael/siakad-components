import { Button, Input, Text } from "..";
import { twMerge } from "tailwind-merge";
import DateInputControl from "./DateInputControl";

const Week = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"];

const positionClasses = {
  "bottom-right": "top-10 right-0",
  "bottom-left": "top-10 left-0",
  "top-right": "bottom-10 right-0",
  "top-left": "bottom-10 left-0",
};

const DateInputPopup = ({
  position = "bottom-right",
  currentMonth,
  currentYear,
  navigateMonth,
  children,
  dateToday,
  clearDate,
  actionButton,
}) => {
  return (
    <div
      className={twMerge(
        "absolute my-1.5 z-30 block w-full max-w-[328px]",
        positionClasses[position]
      )}
    >
      <div className="inline-block rounded-xl bg-white custom-shadow-datepicker border border-fade">
        <div className="px-6 py-5 space-y-3">
          <DateInputControl
            currentMonth={currentMonth}
            currentYear={currentYear}
            navigateToNextMonth={() => navigateMonth(1)}
            navigateToPrevMonth={() => navigateMonth(-1)}
          />
          {/* <div className="flex gap-3">
            <Input className="w-full" />
            <Button
              variant="white"
              className="text-gray-100 font-medium px-3.5 py-[9px]"
              onClick={dateToday}
            >
              Today
            </Button>
          </div> */}
          <div className="grid grid-cols-7 gap-y-1 gap-x-0">
            {Week.map((day) => (
              <div
                className="w-10 h-10 items-center flex justify-center"
                key={day}
              >
                <Text tag="span" weight="600" size="sm">
                  {day}
                </Text>
              </div>
            ))}
            {children}
          </div>
        </div>
        {actionButton && (
          <div className="p-4 gap-3 flex flex-row border-t border-fade">
            <Button className="w-full" size="md" onClick={dateToday}>
              Today
            </Button>
            <Button
              className="w-full"
              size="md"
              variant="white"
              onClick={clearDate}
            >
              Clear
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateInputPopup;
