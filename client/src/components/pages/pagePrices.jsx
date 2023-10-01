import React, { useEffect, useState } from "react"
import axios from "axios"
import TablePrices from "../common/tablePrices"

const PagePrices = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get("http://92.53.69.60/api/service")
            setServices(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (services && isLoading) {
            setIsLoading(false)
        }
    }, [services])

    return (
        <>{!isLoading ? <TablePrices services={services} /> : "Loading..."}</>
    )
}

export default PagePrices
