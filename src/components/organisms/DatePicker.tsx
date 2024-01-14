"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import IconCaretUp from "@/assets/icons/ic-caret-up.svg"
import IconCaretDown from "@/assets/icons/ic-caret-down.svg"
import IconCalendar from "@/assets/icons/ic-calendar.svg"
import IconChevronRight from "@/assets/icons/ic-chevron-right.svg"
import IconChevronLeft from "@/assets/icons/ic-chevron-left.svg"
import { daysInMonth } from "@/utils/daysInMont"
import { monthName, weekdayByMonday } from "@/utils/dateName";

type OpenCalender = {
    calendar: boolean,
    years: boolean,
    mont: boolean
}

type ArrayCalender = {
    is_month: boolean,
    date: number,
    month: number,
    year: number,
    day: string,
    month_name: string,
}

type OptionValue = {
    label: string,
    value: number
}

export default function DatePicker() {
    const [isOpen, setIsOpen] = useState<OpenCalender>({ calendar: false, years: false, mont: false });
    const [calendar, setCalendar] = useState<ArrayCalender[]>([]);
    const [month, setMonth] = useState<OptionValue>({ label: monthName[new Date().getMonth()], value: new Date().getMonth() });
    const [year, setYear] = useState<OptionValue>({ label: new Date().getFullYear().toString(), value: new Date().getFullYear() });

    useEffect(() => {
        setCalendar(daysInMonth(month.value, year.value))
    }, []);

    const handleOpenCalendar = () => {
        setIsOpen({ ...isOpen, calendar: !isOpen.calendar })
    }

    const handleShowYears = () => {
        setIsOpen({ ...isOpen, years: !isOpen.years })
    }

    const hanldeNextMonth = () => {
        let nextMonth = month.value + 1
        
        if (nextMonth === 12) nextMonth = 0
        setCalendar(daysInMonth(nextMonth, year.value))
        setMonth({ ...month, label: monthName[nextMonth], value: nextMonth })

    }

    const hanldePrevMonth = () => {
        let prevMont = month.value - 1

        if (prevMont < 1) prevMont = 11
        setCalendar(daysInMonth(prevMont, year.value))
        setMonth({ ...month, label: monthName[prevMont], value: prevMont })

    }

    return (
        <div className="flex flex-col">
            <label className="capitalize">date picker</label>
            <div className="relative mt-2 rounded-md shadow-sm w-96">
                <input type="text" name="date" id="date" placeholder="dd/mm/yy" className="uppercase block w-full h-12 rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button onClick={handleOpenCalendar} className="p-2">
                        <Image src={IconCalendar} alt="Icon Calendar" />
                    </button>
                </div>
                {
                    isOpen.calendar &&
                    <div className="absolute p-4 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-full h-72 border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
                        <div className="flex justify-between">
                            <div>
                                <label>{month.label}</label>
                                <button onClick={handleShowYears} className="p-2">
                                    <Image src={isOpen.years ? IconCaretDown : IconCaretUp} alt="Picture of the author" />
                                </button>
                            </div>
                            <div className="flex gap-10">
                                <button onClick={hanldePrevMonth} className="p-2">
                                    <Image src={IconChevronLeft} alt="Picture of the author" />
                                </button>
                                <button onClick={hanldeNextMonth} className="p-2">
                                    <Image src={IconChevronRight} alt="Picture of the author" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="grid grid-cols-7 grid-flow-row gap-4 mt-5">
                                {weekdayByMonday.map((day: any) => {
                                    return (
                                        <label key={day} className="w-8 text-center font-semibold">{day.split('')[0]}</label>
                                    )
                                })}
                            </div>
                            <div className="grid grid-cols-7 grid-flow-row gap-y-2 gap-x-4 mt-5">
                                {calendar.map((list: any, idx: any) => {
                                    return (
                                        <label key={idx} className="w-10 h-5 text-center hover:bg-gray-500 radius rounded hover:text-white">{list.is_month ? list.date : ''}</label>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}