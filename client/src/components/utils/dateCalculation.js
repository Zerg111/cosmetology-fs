export default function getDateOrdering() {
    const dateOrdering = new Date()
    dateOrdering.setDate(dateOrdering.getDate() + 7)
    const day = dateOrdering.getDate()
    const month = dateOrdering.getMonth() + 1
    const year = dateOrdering.getFullYear()
    const dateOrderingFormat = `${day < 10 ? `0${day}` : day}.${
        month < 10 ? `0${month}` : month
    }.${year}`
    return { name: "date", value: dateOrderingFormat }
}
