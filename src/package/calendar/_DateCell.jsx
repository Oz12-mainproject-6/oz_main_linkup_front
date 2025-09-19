import { Vstack } from "../layout";
import EventBox from "./_EventBox";
import styles from "./calendar.module.css";

const getDayType = (date) => {
    const day = date.getDay();
    switch (day) {
        case 0:
            return "SUNDAY";
        case 6:
            return "SATURDAY";
        default:
            return "BUSINESS_DAY";
    }
};

const getDayTypeFromKorean = (weekday) => {
    switch (weekday) {
        case "일":
            return "SUNDAY";
        case "토":
            return "SATURDAY";
        default:
            return "BUSINESS_DAY";
    }
};

const dayTypeToClassName = {
    SUNDAY: styles.sunday,
    SATURDAY: styles.saturday,
    BUSINESS_DAY: styles.businessDay,
};

const dayTypeToColor = {
    SUNDAY: "var(--color-red)",
    SATURDAY: "var(--color-blue)",
    BUSINESS_DAY: "var(--color-vivid)",
};

export const HeaderCell = ({ weekday }) => {
    const defaultClassName = styles.headerCell;
    const dayType = getDayTypeFromKorean(weekday);
    const dayTypeClassName = dayTypeToClassName[dayType];
    const className = `${defaultClassName} ${dayTypeClassName}`;
    return <div className={className}>{weekday}</div>;
};

const DayCircle = ({ date, isHolyday, isToday }) => {
    const dayType = isHolyday ? "HOLYDAY" : getDayType(date);
    const day = date.getDate();
    const dayTypeClassName = dayTypeToClassName[dayType];
    const defaultClassName = styles.dayCircle;
    const todayClassName = isToday ? styles.today : "";
    const className = `${dayTypeClassName} ${defaultClassName} ${todayClassName}`;

    const style = { "--color-today": dayTypeToColor[dayType] };
    return (
        <div style={style} className={className}>
            {day}
        </div>
    );
};

const DateCell = ({ date, eventArray, isDim, isToday }) => {
    const isHolyday = false;

    const defaultClassName = `${styles.day}`;
    const opacityClassName = isDim ? styles.dim : "";
    const className = `${defaultClassName} ${opacityClassName}`;

    return (
        <Vstack className={className}>
            <DayCircle date={date} isHolyday={isHolyday} isToday={isToday} />
            {eventArray.map((event) => (
                <EventBox event={event} />
            ))}
        </Vstack>
    );
};

export default DateCell;
