function getDaysInMonth() {
  var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getMonth();
  var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getFullYear();
  var date = new Date(year, month, 1);
  var days = [];

  // const firstDayOfMonth = date.getDay();
  var firstDayOfMonth = (date.getDay() + 6) % 7;
  var previousMonth = month === 0 ? 11 : month - 1;
  var previousYear = month === 0 ? year - 1 : year;
  var nextMonth = month === 11 ? 0 : month + 1;
  var nextYear = month === 11 ? year + 1 : year;
  var lastDateOfPreviousMonth = new Date(previousYear, previousMonth + 1, 0).getDate();
  for (var i = firstDayOfMonth; i > 0; i--) {
    days.push({
      date: new Date(previousYear, previousMonth, lastDateOfPreviousMonth - i + 1),
      isFromPreviousMonth: true
    });
  }
  while (date.getMonth() === month) {
    days.push({
      date: new Date(date),
      isFromPreviousMonth: false
    });
    date.setDate(date.getDate() + 1);
  }
  var totalDaysInMonth = days.length;
  var remainingSlots = 42 - totalDaysInMonth;
  for (var _i = 1; _i <= remainingSlots; _i++) {
    days.push({
      date: new Date(nextYear, nextMonth, _i),
      isFromNextMonth: true
    });
  }
  return days;
}
export default getDaysInMonth;