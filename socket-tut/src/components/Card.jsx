import PropTypes from "prop-types"
import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ img, text, title, gradient,onHome

}) => {

    return (
        <div className={`w-96 card shadow-base-300 shadow-md text-white ${gradient || "custom-gradient5"} animate-slideBottom`}>
            <figure className='px-10 pt-10 w-full h-56'>
                <img src={img} alt="" className="rounded-xl animate-pop h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title divider divider-neutral">
                    {title}
                </h2>
                <p>
                    {text}
                </p>
                {!onHome &&
                <div className="card-actions">
                    <Link className="btn btn-primary" to={`/models/health`}>try now</Link>
                </div>}
            </div>
        </div>
    )
}

Card.propTypes = {
    gradient: PropTypes.string,
    image: PropTypes.any,
    text: PropTypes.string,
    title: PropTypes.string,
    onHome: PropTypes.bool
}

export default Card