import { useState } from "react";

export default function useCountdown(data) {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const countdown = () => {
        const countDate = new Date(data).getTime();
        const now = new Date().getTime();

        const interval = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(interval / day);
        const hourNumber = Math.floor((interval % day) / hour);
        const minNumber = Math.floor((interval % hour) / minute);
        const secNumber = Math.floor((interval % minute) / second);

        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minNumber);
        setSecond(secNumber);
    };

    setInterval(countdown, 1000)
    return [day, hour, minute, second]
}