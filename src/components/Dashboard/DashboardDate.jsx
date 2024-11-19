'use client'
import {daysOfWeek, monthsOfYear, Text} from "@/components";

export default function DashboardDate({className, children}) {
    const dateToday = new Date();
    const day = daysOfWeek()[dateToday.getDay()];
    const month = monthsOfYear()[dateToday.getMonth()];
    return <Text size="xl" weight={400} color="text-white">
        {`${day}, ${dateToday.getDate()} ${month} ${dateToday.getFullYear()}`}
    </Text>
}