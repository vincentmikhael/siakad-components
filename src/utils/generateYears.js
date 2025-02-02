const generateYears = (startYear = 2014, interval = 5) => {
    const currentYear = new Date().getFullYear();
    const years = [];

    let year = startYear;
    while (year <= currentYear) {
        years.push(year.toString());
        year += interval;
    }

    return years.reverse();
};

export default generateYears;
