import PropTypes from "prop-types"
import React from 'react'
import { Link } from "react-router-dom"
import { FaExternalLinkAlt } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
const Card = ({ index, img, text, title, gradient, onHome,path,chatType

}) => {

    return (

        <div className={`sm:w-96 w-full card text-white shadow-lg rounded-3xl  
    animate-slideBottom hover:scale-105 hover:shadow-2xl hover:shadow-accent-content 
    transition duration-300 group`}>


            <SpotlightCard
                key={index}
                className="custom-spotlight-card flex-1 sm:py-0 h-auto flex flex-col justify-center"
                spotlightColor="rgba(0, 229, 255, 0.2)"
            >
                <figure className='sm:px-10 sm:pt-10 w-full h-56 relative overflow-hidden'>
                    <img src={img} alt=""
                        className="rounded-xl animate-pop h-full transition duration-300 
            group-hover:brightness-110 group-hover:saturate-150 hover-glare"
                    />
                </figure>
                <div className="card-body text-center pb-0 sm:pb-6">
                    <h2 className="card-title divider divider-neutral md:text-xl text-md">
                        {title}
                    </h2>
                    <p className="sm:text-sm text-xs">
                        {text}
                    </p>
                    {!onHome &&
                        <div className="card-actions mx-auto mt-2">
                            <Link className="btn btn-primary" to={`${path}`}>try now <FaExternalLinkAlt /></Link>
                        </div>}
                </div>
            </SpotlightCard>
        </div>
    )
}

Card.propTypes = {
    gradient: PropTypes.string,
    image: PropTypes.any,
    text: PropTypes.string,
    title: PropTypes.string,
    onHome: PropTypes.bool,
    link: PropTypes.string,
    type: PropTypes.string
}

export default Card