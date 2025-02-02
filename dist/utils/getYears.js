var getYears = function getYears() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var nextYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var currentYear = new Date().getFullYear();
  var startYear = nextYear ? currentYear + 1 : currentYear;
  var years = [];
  for (var i = 0; i < count; i++) {
    years.push({
      // id: startYear - i,
      id: (startYear - i).toString(),
      nama: (startYear - i).toString()
    });
  }
  return years;
};
export default getYears;