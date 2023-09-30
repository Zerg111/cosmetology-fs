export default function getWeekAppointment() {
    const week = []
    for (let i = 0; i < 7; i++) {
        const dateAppintment = new Date(Date.now() + (i + 1) * 24 * 3600 * 1000)
        const day = dateAppintment.getDay() + 1
        const month = dateAppintment.getMonth() + 1
        const year = dateAppintment.getFullYear()
        const dateForLabelAppintmentFormat = `${day < 10 ? `0${day}` : day}.${
            month < 10 ? `0${month}` : month
        }`
        const dateForValueAppintmentFormat = `${day < 10 ? `0${day}` : day}.${
            month < 10 ? `0${month}` : month
        }.${year}`
        week[i] = {
            label: dateForLabelAppintmentFormat,
            value: dateForValueAppintmentFormat
        }
    }
    return week
}
