import { useEffect } from "react";
import Calendar from "../../package/calendar/Calendar";
import useLinkUpStore from "../store/store";
import { BulkDownloadButton } from "./AdditionalCalendarButtons";
import RoundBox from "../../package/RoundBox";

const filterEventArray = (eventArray, selectedYear, selectedMonth) => {
    const filteredEventArray = eventArray.filter((event) => {
        const year = event.start_time.slice(0, 4);
        const month = event.start_time.slice(5, 7);
        return Number(year) === selectedYear && Number(month) === selectedMonth;
    });

    return filteredEventArray;
};

/**
 * @param {boolean} isMedium
 *
 * store에 저장된 eventArray를 자동으로 꺼내옶니다
 */
const ArtistCalendar = ({ isMedium = false }) => {
    const eventArray = useLinkUpStore((state) => state.eventArray);
    const setSelectedMonthEventArray = useLinkUpStore((state) => state.setSelectedMonthEventArray);

    const handleDateChange = (date) => {
        const selectedDate = date ?? new Date();

        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth() + 1;

        const filteredEventArray = filterEventArray(eventArray, selectedYear, selectedMonth);
        setSelectedMonthEventArray(filteredEventArray);
    };

    useEffect(() => {
        handleDateChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventArray]);

    return (
        <>
            <RoundBox padding="md">
                <Calendar
                    size={isMedium ? "md" : "lg"}
                    eventArray={eventArray}
                    onDateChange={handleDateChange}
                    additionalButtonArray={[<BulkDownloadButton />]}
                />
            </RoundBox>
        </>
    );
};

export default ArtistCalendar;
