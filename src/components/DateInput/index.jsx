"use client";
import { useState, useEffect, useRef, useMemo } from "react";

import getDaysInMonth from "@/utils/getDaysInMonth";
import formatDate from "@/utils/formatDate";
import useClickOutside from "@/hooks/useClickOutside";
import DateInputPopup from "./DateInputPopup";
import DateItem from "./DateItem";
import { CalendarBlank } from "@phosphor-icons/react";
import { Input } from "..";

function getDateSlots(currentMonth, currentYear) {
  const dateArray = getDaysInMonth(currentMonth, currentYear);
  const slotSkipCount = new Date(dateArray[0]).getDay();

  for (let i = 0; i < slotSkipCount; i++) {
    dateArray.unshift(null);
  }

  return dateArray;
}

const DateInput = ({ value, onChange, disabled, actionButton = false }) => {
  const popupRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [typingTimeout, setTypingTimeout] = useState(null);

  useClickOutside(popupRef, () => {
    setShowPopup(false);
  });

  const dateArray = useMemo(
    () => getDateSlots(currentMonth, currentYear),
    [currentMonth, currentYear]
  );

  useEffect(() => {
    if (value) {
      const dateObj = new Date(value);

      setSelectedDate(formatDate(dateObj));
      setCurrentMonth(dateObj.getMonth());
      setCurrentYear(dateObj.getFullYear());
    }
  }, []);

  function togglePopupHandler() {
    setShowPopup((currentShowPopup) => {
      return !currentShowPopup;
    });
  }

  function navigateMonthHandler(navigateBy = 1) {
    if (currentMonth + navigateBy === 12) {
      setCurrentMonth(0);
      setCurrentYear((currentState) => {
        return currentState + 1;
      });
    } else if (currentMonth + navigateBy === -1) {
      setCurrentMonth(11);
      setCurrentYear((currentState) => {
        return currentState - 1;
      });
    } else {
      setCurrentMonth((currentState) => {
        return currentState + navigateBy;
      });
    }
  }

  function selectDateHandler(date) {
    onChange(new Date(date));
    setSelectedDate(formatDate(date));
    setShowPopup(false);
  }

  function clearDate() {
    setSelectedDate(null);
  }

  function dateToday() {
    setShowPopup(false);
    setSelectedDate(formatDate(new Date()));
  }

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setSelectedDate(inputValue);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        const parsedDate = new Date(inputValue);
        if (!isNaN(parsedDate) && inputValue === formatDate(parsedDate)) {
          onChange(parsedDate);
          setCurrentMonth(parsedDate.getMonth());
          setCurrentYear(parsedDate.getFullYear());
        }
      }, 1000)
    );
  }

  return (
    <span ref={popupRef}>
      <div className="relative max-w-sm">
        <Input
          value={selectedDate}
          onChange={handleInputChange}
          onFocus={togglePopupHandler}
          placeholder="Select date"
          rightIcon={<CalendarBlank size={16} weight="bold" />}
          disabled={disabled}
        />

        {showPopup && (
          <DateInputPopup
            currentMonth={currentMonth}
            currentYear={currentYear}
            navigateMonth={navigateMonthHandler}
            clearDate={clearDate}
            dateToday={dateToday}
            actionButton={actionButton}
          >
            {dateArray.map((dateObj, index) => {
              return (
                <DateItem
                  key={index}
                  dateObj={dateObj.date}
                  isFromPreviousMonth={dateObj.isFromPreviousMonth}
                  isFromNextMonth={dateObj.isFromNextMonth}
                  selected={selectedDate === formatDate(dateObj.date)}
                  onClick={() => selectDateHandler(dateObj.date)}
                />
              );
            })}
          </DateInputPopup>
        )}
      </div>
    </span>
  );
};

export default DateInput;
