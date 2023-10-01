import React, { useEffect, useState } from "react"
import axios from "axios"
import FormAppointment from "../common/forms/formAppointment/formAppointment"

const PageRecord = () => {
    const dataAppointment = {
        name: "",
        phone: "",
        date: "",
        time: "",
        service: []
    }

    const [services, setServices] = useState([])
    const [appointment, setAppointment] = useState(dataAppointment)
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccessfulAppointment, setIsSuccessfulAppointment] = useState(null)

    const handleSubmit = async (data) => {
        try {
            await axios
                .post("http://92.53.69.60/api/appointment", data)
                .then((res) => console.log(res.data))
        } catch (error) {
            const expectedErrors =
                error.response &&
                error.response.status >= 400 &&
                error.response.status < 500
            if (!expectedErrors) {
                console.log("Unexpected error")
            } else {
                setIsSuccessfulAppointment(error.response.status)
                console.log("Expected Error")
            }
        }
    }

    useEffect(() => {
        if (services && isLoading) {
            setIsLoading(false)
        }
    }, [services])

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                "http://localhost:8080/api/service"
            )
            setServices(data)
            setAppointment(dataAppointment)
        }
        fetchData()
    }, [])

    return (
        <>
            {!isLoading ? (
                <>
                    <FormAppointment
                        services={services}
                        appointment={appointment}
                        onSubmit={handleSubmit}
                        isSuccessfulAppointment={isSuccessfulAppointment}
                    />
                </>
            ) : (
                "Loading..."
            )}
        </>
    )
}

export default PageRecord
