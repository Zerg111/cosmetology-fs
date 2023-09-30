import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import getDateOrdering from "../../utils/dateCalculation"

const MultiSelectField = ({ options, onChange, name, label, error }) => {
    const handleChange = (value) => {
        const productId = value.map((item) => {
            return item.value
        })
        onChange(getDateOrdering()) // калькулятор даты на 7 вперед
        onChange({ name: name, value: productId })
    }

    const getInputClasses = () => {
        return "form-control basic-multi-select" + (error ? " is-invalid" : "")
    }

    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                options={options}
                className={getInputClasses()}
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.object
}

export default MultiSelectField
