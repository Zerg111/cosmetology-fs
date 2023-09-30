import React from "react"
import Select from "react-select"
import PropTypes from "prop-types"

const SelectField = ({ options, onChange, name, label, error }) => {
    const handleChange = (item) => {
        const serviceId = item.value
        onChange({ name: name, value: serviceId })
    }

    const getInputClasses = () => {
        return "form-control basic-single" + (error ? " is-invalid" : "")
    }
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                className={getInputClasses()}
                classNamePrefix="select"
                // defaultValue={options}
                name={name}
                options={options}
                onChange={handleChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

SelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.object
}

export default SelectField
