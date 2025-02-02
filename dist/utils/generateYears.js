var generateYears = function generateYears() {
  var startYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2014;
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var currentYear = new Date().getFullYear();
  var years = [];
  var year = startYear;
  while (year <= currentYear) {
    years.push(year.toString());
    year += interval;
  }
  return years.reverse();
};
export default generateYears;