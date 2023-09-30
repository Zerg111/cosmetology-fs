import React, { useEffect, useState } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import ServiceCard from "../common/serviceCard"

const PageServices = ({ location }) => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                "http://localhost:8080/api/service"
            )
            setServices(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (services && isLoading) {
            setIsLoading(false)
        }
    }, [services])

    const idService = new URLSearchParams(location.search).get("id")
    return (
        <>
            {!isLoading ? (
                <ServiceCard services={services} idService={idService} />
            ) : (
                "Loading..."
            )}
        </>
    )
}

PageServices.propTypes = {
    location: PropTypes.string
}

export default PageServices
