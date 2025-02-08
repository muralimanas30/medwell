import React from 'react'
import PropTypes from 'prop-types'
import CustomTitle from './CustomTitle'
import { Link } from 'react-router-dom'
import { BsSdCard } from 'react-icons/bs'


const images = [
    "https://www.hellotars.com/blog/wp-content/uploads/2023/06/7971251_3800893-1-1536x1536.jpg",
    "https://rumorfix.com/wp-content/uploads/2022/12/Medical-Marketing-SEO-Services-For-Best-Healthcare-Providers.png",
    "https://blog.altabel.com/wp-content/uploads/2022/10/chatbot.jpg",
    "https://cdn.clickworker.com/wp-content/uploads/2022/09/HealthcareChatbotTrainingData.webp"

]

const Hero = props => {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-24 items-center mx-4 sm:mx-16">
                <div className='animate-slideLeft'>
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                        AI-Powered Healthcare, Anytime, Anywhere, now easier than ever
                    </h1>
                    <p className="mt-8 max-w-xl text-lg leading-8">
                        Get instant, reliable medical insights with our AI-powered consultant.
                        Accessible, intelligent, and always ready to guide your healthcare journey with accuracy and care.
                    </p>
                    <div className="mt-10">
                        <Link to={`about`} className='btn btn-primary'>
                            About Us
                        </Link>
                    </div>
                </div>
                <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 rounded-box bg-neutral animate-slideRight">
                    {images.map(image => {
                        return <div key={image} className='carousel-item'>
                            <img src={image} className='rounded-box h-full w-80 object-cover ' />
                        </div>
                    })}
                </div>
            </div>
            <div className="divider divider-start"></div>
        </>
    )
}

Hero.propTypes = {}

export default Hero