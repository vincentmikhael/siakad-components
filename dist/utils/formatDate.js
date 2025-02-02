function formatDate(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  return "".concat(month, " ").concat(day, ", ").concat(year);
}
export default formatDate;