import { useState, useEffect } from "react"

export default function Panel() {
    // countdown
    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(10)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const countdown = () => {
            const endDate = new Date("December 25, 2023 00:00:00").getTime()
            const today = new Date().getTime()

            const timeDiff = endDate - today

            const seconds = 1000
            const minutes = seconds * 60
            const hours = minutes * 60
            const days = hours * 24

            let timeDays = Math.floor(timeDiff / days)
            let timeHours = Math.floor((timeDiff % days) / hours)
            let timeMinutes = Math.floor((timeDiff % hours) / minutes)
            let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

            timeHours = timeHours < 10 ? "0" + timeHours : timeHours
            timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
            timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

            setDays(timeDays)
            setHours(timeHours)
            setMinutes(timeMinutes)
            setSeconds(timeSeconds)
            setIsLoading(false)
        }

        setInterval(countdown, 1000)
    }, [])

    return (
        <>
            {isLoading ? (
                <h1>Buon Natale!🎅🏻</h1>
            ) : (

                <div className="panel">
                    <h1>Xmas is coming</h1>
                    {/* counter */}
                    <div className="counter">
                        <div className="counter-block">
                            <div id="days" className="counter-block-number">{days}</div>
                            <div className="counter-block-label">Giorni</div>
                        </div>
                        <div className="counter-block">
                            <div id="hours" className="counter-block-number">{hours}</div>
                            <div className="counter-block-label">Ore</div>
                        </div>
                        <div className="counter-block">
                            <div id="minutes" className="counter-block-number">{minutes}</div>
                            <div className="counter-block-label">Minuti</div>
                        </div>
                        <div className="counter-block">
                            <div id="seconds" className="counter-block-number">{seconds}</div>
                            <div className="counter-block-label">Secondi</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}