import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text,onClick }) => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    return (
        <button className="btn btn-primary w-xs"
            type='submit'
            onClick={onClick}
            disabled={isSubmitting}>
            {isSubmitting ? (<>
                <span className="loading loading-spinner">Sending...</span>
            </>) : text || 'Submit'}
        </button>
    )
}

SubmitBtn.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default SubmitBtn
