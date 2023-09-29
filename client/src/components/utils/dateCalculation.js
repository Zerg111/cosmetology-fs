export default function getDateOrdering() {
    const dateOrdering = new Date(Date.now() + 7 * 24 * 3600 * 1000)
    const day = dateOrdering.getDay() + 1
    const month = dateOrdering.getMonth() + 1
    const year = dateOrdering.getFullYear()
    const dateOrderingFormat = `${day < 10 ? `0${day}` : day}.${
        month < 10 ? `0${month}` : month
    }.${year}`
    return { name: "date", value: dateOrderingFormat }
}
