import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useNavigate } from 'react-router-dom'
const CustomTitle = ({ text }) => {

    return (
        <div className="mt-4 rounded-lg p-4 group transition duration-200">
            <hr className='' style={{color:'grey'}}/>
            <h2 className="mt-2 text-4xl capitalize ">
                {text || `Custom Title`}
            </h2>
        </div>
    )
}

CustomTitle.propTypes = {
    text: PropTypes.string
}

export default CustomTitle