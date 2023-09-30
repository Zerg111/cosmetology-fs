import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import TextField from "../textField"
import SelectField from "../selectField"
import getWeekAppointment from "../../../utils/weekCalculation"
import { validator } from "../../../utils/validator"
import MessageAppointment from "./messageAppointment"

const FormAppointment = ({
    services,
    appointment,
    onSubmit,
    isSuccessfulAppointment
}) => {
    console.log(isSuccessfulAppointment)
    const [data, setData] = useState(appointment)
    const [errors, setErrors] = useState({})
    const [appointmentComplete, setAppointmentComplete] = useState(true)

    useEffect(() => {
        validate()
    }, [data])

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Введите ваше имя и фамилию"
            }
        },
        phone: {
            isRequired: {
                message: "Введите телефон"
            },
            min: {
                message:
                    "Номер телефона должен состоять минимум из 10 символов",
                value: 10
            }
        },
        service: {
            isRequired: {
                message: "Выберите услугу"
            }
        },
        date: {
            isRequired: {
                message: "Выберите дату"
            }
        },
        time: {
            isRequired: {
                message: "Выберите время"
            }
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const timeOptions = [
        { label: "10:00", value: "10:00" },
        { label: "12:00", value: "12:00" },
        { label: "14:00", value: "14:00" },
        { label: "16:00", value: "16:00" },
        { label: "18:00", value: "18:00" }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        setAppointmentComplete(false)
        onSubmit(data)
        console.log(data)
    }

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const servicesList = services.map((service) => ({
        label: service.name,
        value: service._id
    }))
    const isValid = Object.keys(errors).length === 0
    return (
        <div className="d-flex justify-content-center m-3">
            {appointmentComplete ? (
                <form
                    onSubmit={handleSubmit}
                    className="w-50 m-2 border rounded bg-white"
                >
                    <div className="m-2">
                        <TextField
                            label="Фамилия и Имя"
                            name="name"
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Телефон"
                            name="phone"
                            onChange={handleChange}
                            error={errors.phone}
                        />
                        <SelectField
                            options={servicesList}
                            label="Выберите услугу"
                            name="service"
                            onChange={handleChange}
                            error={errors.service}
                        />
                        <SelectField
                            options={getWeekAppointment()}
                            label="Выберите дату"
                            name="date"
                            onChange={handleChange}
                            error={errors.date}
                        />
                        <SelectField
                            options={timeOptions}
                            label="Выберите время"
                            name="time"
                            onChange={handleChange}
                            error={errors.time}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Записаться
                        </button>
                    </div>
                </form>
            ) : (
                <MessageAppointment
                    date={data.date}
                    time={data.time}
                    isSuccessfulAppointment={isSuccessfulAppointment}
                />
            )}
        </div>
    )
}

FormAppointment.propTypes = {
    services: PropTypes.array,
    appointment: PropTypes.object,
    onSubmit: PropTypes.func,
    isSuccessfulAppointment: PropTypes.number
}

export default FormAppointment
