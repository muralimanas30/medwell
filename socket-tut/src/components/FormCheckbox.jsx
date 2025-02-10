import React from 'react'
import PropTypes from 'prop-types'

const FormCheckbox = ({ label, name, defaultValue, size }) => {
    return (
        <div className="form-control text-neutral flex flex-col items-center ">
            <label htmlFor={name} className='label cursor-pointer block'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input type="checkbox" name={name} defaultChecked={defaultValue}
                className={`mt-2 checkbox checkbox-primary ${size}`} />
        </div>
    )
}

FormCheckbox.propTypes = {
    defaultValue: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
}

export default FormCheckbox