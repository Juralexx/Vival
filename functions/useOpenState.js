import React from 'react'

const useOpenState = () => {
    const [openState, setOpenState] = React.useState({ isOpen: null, willCloseAt: null, willOpenAt: null })

    const weekdays = [{
        day: "Dimanche",
        morning: { from: 7.00, to: 12.00 },
    }, {
        day: "Lundi",
        morning: { from: 6.30, to: 12.30 },
        afternoon: { from: 15.00, to: 19.00 }
    }, {
        day: "Mardi",
        morning: { from: 6.30, to: 12.30 },
        afternoon: { from: 15.00, to: 19.00 }
    }, {
        day: "Mercredi",
        closed: true,
    }, {
        day: "Jeudi",
        morning: { from: 6.30, to: 12.30 },
        afternoon: { from: 15.00, to: 19.00 }
    }, {
        day: "Vendredi",
        morning: { from: 6.30, to: 12.30 },
        afternoon: { from: 15.00, to: 19.00 }
    }, {
        day: "Samedi",
        morning: { from: 7.00, to: 12.30 },
        afternoon: { from: 15.00, to: 19.00 }
    }]

    const getOpenState = () => {
        // if (datas.display_open_state) {
        const date = new Date();
        const n = date.getDay();
        const now = date.getHours() + "." + ('0' + date.getMinutes()).slice(-2);
        const currentDay = weekdays[n];

        const findNextDay = () => {
            if (n < 6) {
                if (!weekdays[n + 1].closed) {
                    return weekdays[n + 1]
                } else return weekdays[n + 2]
            } else {
                if (!weekdays[0].closed) {
                    return weekdays[0]
                } else return weekdays[1]
            }
        }
        const nextDay = findNextDay()

        if (currentDay.closed) {
            return { isOpen: false, willCloseAt: null, willOpenAt: { day: nextDay.day, hour: nextDay.morning.from } }
        } else {
            if (currentDay.morning) {
                if (now < currentDay?.morning?.from) {
                    return { isOpen: false, willCloseAt: null, willOpenAt: { day: null, hour: currentDay.morning.from } }
                } else {
                    if (now > currentDay?.morning.from && now < currentDay?.morning.to) {
                        return { isOpen: true, willOpenAt: null, willCloseAt: { day: null, hour: currentDay.morning.to } }
                    } else {
                        if (now > currentDay?.morning?.to && now < currentDay?.afternoon?.from) {
                            if (currentDay?.afternoon) {
                                return { isOpen: false, willCloseAt: null, willOpenAt: { day: null, hour: currentDay.afternoon.from } }
                            } else {
                                return { isOpen: false, willCloseAt: null, willOpenAt: { day: nextDay.day, hour: nextDay.morning.from } }
                            }
                        } else {
                            if (currentDay?.afternoon) {
                                if (now > currentDay?.afternoon?.from && now < currentDay?.afternoon?.to) {
                                    return { isOpen: true, willOpenAt: null, willCloseAt: { day: null, hour: currentDay.afternoon.to } }
                                } else {
                                    return { isOpen: false, willCloseAt: null, willOpenAt: { day: nextDay.day, hour: nextDay.morning.from } }
                                }
                            } else {
                                return { isOpen: false, willCloseAt: null, willOpenAt: { day: nextDay.day, hour: nextDay.morning.from } }
                            }
                        }
                    }
                }
            } else {
                if (currentDay?.afternoon) {
                    if (now > currentDay?.afternoon?.from && now < currentDay?.afternoon?.to) {
                        return { isOpen: true, willOpenAt: null, willCloseAt: { day: null, hour: currentDay.afternoon.to } }
                    } else {
                        return { isOpen: false, willCloseAt: null, willOpenAt: { day: nextDay.day, hour: nextDay.morning.from } }
                    }
                } else {
                    return { ...prev, isOpen: false, willCloseAt: null, willOpenAt: { day: nextDay.day, hour: nextDay.morning.from } }
                }
            }
        }
        // }
    }

    React.useEffect(() => {
        if (openState.isOpen === null) {
            setOpenState(getOpenState())
        }
        const interval = setInterval(() => {
            setOpenState(getOpenState())
        }, 60000);
        return () => clearInterval(interval);
    }, [])

    const convertNumberInHour = (number) => {
        if (number) {
            let string = String(number)
            if (string.indexOf('.') === -1) {
                string = string + ':'
            } else {
                string = string.replace('.', ':')
            }
            if (string.split(':')[0].length === 1) {
                return string.padEnd(4, '0')
            } else return string.padEnd(5, '0')
        }
    }

    return { openState, convertNumberInHour }
}

export default useOpenState