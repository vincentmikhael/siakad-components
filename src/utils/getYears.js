const getYears = (count = 10, nextYear = false) => {
    const currentYear = new Date().getFullYear();
    const startYear = nextYear ? currentYear + 1 : currentYear;
    const years = [];
    for (let i = 0; i < count; i++) {
        years.push({
            // id: startYear - i,
            id: (startYear - i).toString(),
            nama: (startYear - i).toString()
        });
    }
    return years;
};
export default getYears