export default function getWeekAppointment() {
    const week = []
    for (let i = 0; i < 7; i++) {
        const dateAppintment = new Date()
        dateAppintment.setDate(dateAppintment.getDate() + (i + 1))
        const day = dateAppintment.getDate()
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
