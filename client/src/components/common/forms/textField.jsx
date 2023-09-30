import React from "react"
import PropTypes from "prop-types"
import InputMask from "react-input-mask"

const TextField = ({ label, name, onChange, error }) => {
    // console.log("error.name", error)

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const getInputTypes = () => {
        return name === "phone" ? "number" : name === "name" && "text"
    }

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }

    const inputType = getInputTypes()
    return (
        <div className="mb-4">
            <label htmlFor={name}> {label}</label>
            <div className="mt-2">
                {inputType === "number" ? (
                    <>
                        <InputMask
                            id={name}
                            name={name}
                            onChange={handleChange}
                            className={getInputClasses()}
                            mask="+7(999)-999-99-99"
                        />
                        {error && (
                            <div className="invalid-feedback">{error}</div>
                        )}
                    </>
                ) : (
                    <>
                        <input
                            type={inputType}
                            id={name}
                            name={name}
                            onChange={handleChange}
                            className={getInputClasses()}
                        />
                        {error && (
                            <div className="invalid-feedback">{error}</div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

TextField.defaultProps = {
    type: "text"
}

TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.object,
    onChange: PropTypes.func
}

export default TextField
