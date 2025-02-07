import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ label, name, type, defaultValue, size, required }) => {
    return (
        <div className='form-control '>
            <label className='label block'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className={`input input-bordered ${size || "w-xs"}`}
                required={required}
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
    type: PropTypes.string
}

export default FormInput
