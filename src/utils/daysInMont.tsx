import { monthName, weekday } from "./dateName";

export default function daysInMonth(month: number, year: number) {
    let days = Array.from(
        { length: new Date(year, month, 0).getDate() },
        (_, i) => new Date(year, month - 1, i + 1)
    );

    let newDays = days.map((day: any) => {
        let date = {
            date: day.getDate(),
            day: weekday[day.getDay()],
            month: day.getMonth() + 1,
            month_name: monthName[day.getMonth()],
            year: day.getFullYear()
        }
        return date
    })

    return newDays;
}
