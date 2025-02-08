import React from 'react'
import PropTypes from 'prop-types'
import { CustomTitle, Card } from './index'

const images = [
    {
        img: "https://thumbs.dreamstime.com/b/healthy-concept-mental-physical-social-health-isolated-white-background-three-important-things-necessary-good-state-188091536.jpg",
        title:"Your Health + ",
        text: "Know more about your personal health and simple yet impactful ways to improve it !!",
    },
    {
        img: "https://thumbs.dreamstime.com/b/healthy-concept-mental-physical-social-health-isolated-white-background-three-important-things-necessary-good-state-188091536.jpg",
        title:"Your WellBeing",
        text: "Know more about your personal health and simple yet impactful ways to improve it !!",
    },
    {
        img: "https://thumbs.dreamstime.com/b/healthy-concept-mental-physical-social-health-isolated-white-background-three-important-things-necessary-good-state-188091536.jpg",
        title:"Your Medical Aid",
        text: "Know more about your personal health and simple yet impactful ways to improve it !!",
    }
]

const Models = (props) => {
    return (
        <section className="mx-auto p-6">
            <div className="text-center animate-popIn">
                <h2 className="font-bold tracking-wider text-4xl text-primary">
                    Try Our AI-Enhanced Chatbot
                </h2>
                <p className="mt-2 text-[blueviolet] text-lg">
                    Experience next-gen AI with our interactive models.
                </p>
            </div>

            <div className="mt-8 w-full flex flex-wrap gap-10 animate-slideTop justify-around">
                {
                    images.map((image,index)=>{
                        return <Card {...image} gradient={``} key={index}/>
                    })
                }
            </div>
        </section>
    );
};


Models.propTypes = {}

export default Models