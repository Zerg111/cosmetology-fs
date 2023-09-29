import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import MultiSelectField from "./multiSelectField"
import TextField from "./textField"
import { validator } from "../../../utils/validator"
import MessageOrderComplete from "./messageOrderComplete"

const FormOrder = ({ products, ordering, onSubmit }) => {
    const [data, setData] = useState(ordering)
    const [errors, setErrors] = useState({})
    const [orderingComplete, setOrderingComplete] = useState(true)

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
        product: {
            isRequired: {
                message: "Выберите хотя бы один товар"
            }
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrderingComplete(false)
        onSubmit(data)
        console.log(data)
    }

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const productsList = products.map((product) => ({
        label: product.name,
        value: product._id
    }))
    const isValid = Object.keys(errors).length === 0
    return (
        <div className="d-flex justify-content-center m-3">
            {orderingComplete ? (
                <form
                    onSubmit={handleSubmit}
                    className="w-50 m-2 border rounded"
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
                        <MultiSelectField
                            options={productsList}
                            onChange={handleChange}
                            name="product"
                            label="Выберите товары"
                            error={errors.product}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Заказать
                        </button>
                    </div>
                </form>
            ) : (
                <MessageOrderComplete date={data.date} />
            )}
        </div>
    )
}

FormOrder.propTypes = {
    products: PropTypes.array,
    ordering: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
}

export default FormOrder
