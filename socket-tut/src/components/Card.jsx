import PropTypes from "prop-types"
import React from 'react'

const Card = ({ img, text, title, gradient

}) => {

    return (
        <div className={`w-96 card shadow-base-300 shadow-md hover-glare ${gradient || "custom-gradient5"} animate-slideBottom`}>
            <figure className='px-10 pt-10'>
                <img src={img} alt="" className="rounded-xl animate-pop" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title divider divider-neutral">
                    {title}
                </h2>
                <p>
                    {text}
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary">try now</button>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    gradient: PropTypes.string,
    image: PropTypes.any,
    text: PropTypes.any,
    title: PropTypes.any
}

export default Card