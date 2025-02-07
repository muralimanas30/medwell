import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useNavigate } from 'react-router-dom'
const CustomTitle = ({ text }) => {

    return (
        <div className="m-4 rounded-lg p-4 bg-secondary hover:bg-success group transition duration-200">
            <h2 className="text-4xl capitalize text-secondary-content group-hover:text-success-content">
                {text || `Custom Title`}
            </h2>
        </div>
    )
}

CustomTitle.propTypes = {
    text: PropTypes.string
}

export default CustomTitle