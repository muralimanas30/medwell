import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ label, name, type, defaultValue, size, required,placeholder }) => {
    return (
        <div className='form-control '>
            <label className='label block'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className={`input input-bordered ${size || ""}`}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

FormInput.propTypes = {
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.any,
    size: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
}

export default FormInput
