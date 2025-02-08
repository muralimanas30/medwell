import { FaExternalLinkAlt } from "react-icons/fa";
import React from 'react'
import PropTypes from 'prop-types'
import { CustomTitle, Card } from './index'
import { Link } from "react-router-dom";

const images = [
    {
        img: "https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/5f7945a7d95201001cc124da.jpg",
        title: "Your Health + ",
        text: "Know more about your personal health and simple yet impactful ways to improve it !!",
        path: '/models/health'
    },
    {
        img: "https://goqii.com/blog/wp-content/uploads/shutterstock_1794800500.jpg",
        title: "Your WellBeing",
        text: "Know more about your personal health and simple yet impactful ways to improve it !!",
        path: '/models/wellbeing'
    },
    {
        img: "https://th.bing.com/th/id/OIP.XOQfnOElNX0qiOLoUG0WbwHaEM?w=1024&h=579&rs=1&pid=ImgDetMain",
        title: "Your Medical Aid",
        text: "Know more about your personal health and simple yet impactful ways to improve it !!",
        path: '/models/medical-aid'
    }
]

const Models = ({ onHome }) => {
    return (
        <section className="mx-auto p-6 ">
            <div className="text-center animate-popIn">
                <h2 className="font-bold tracking-wider text-4xl text-primary">
                    Try Our AI-Enhanced Chatbot
                </h2>
                <p className="mt-2 text-[blueviolet] text-lg">
                    Experience next-gen AI with our interactive models.
                </p>
            </div>

            <div className="mt-8 w-full flex flex-wrap gap-10 animate-slideBottom justify-around">
                {
                    images.map((image, index) => {
                        return <Card {...image} gradient={``} key={index} onHome={onHome} />
                    })
                }
            </div>
            {onHome &&
                <div className="mt-8 mx-auto w-full text-center">
                    <Link to={`/models`} className="btn btn-secondary">Visit  <FaExternalLinkAlt /></Link>
                    <span className="text-primary"> and try our models now</span>
                </div>
            }
        </section>
    );
};


Models.propTypes = {
    onHome: PropTypes.bool
}

export default Models