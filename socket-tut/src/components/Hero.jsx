import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctor from '../assets/doctor.gif';
import cooking from '../assets/cooking.gif';
import running from '../assets/running.gif';

const images = [
    { src: doctor, alt: 'Doctor Consultation' },
    { src: running, alt: 'Fitness and Running' },
    { src: cooking, alt: 'Healthy Cooking' },
];

const Hero = (props) => {
    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,  // Smooth transition speed
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 2500, // Moves every 2.5 seconds
        arrows: true, // Keep navigation arrows
    };

    return (
        <>
            {/* Breadcrumbs */}
            <div className="mx-4 sm:mx-12 breadcrumbs text-sm sm:text-md">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">AI Healthcare</Link>
                    </li>
                </ul>
            </div>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-24 items-center mx-4 mt-4 sm:mx-16">
                {/* Left Side: Text Content */}
                <div className="animate-slideLeft">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                        AI-Powered Healthcare, Anytime, Anywhere, now easier than ever
                    </h1>
                    <p className="mt-8 max-w-xl text-lg leading-8">
                        Get instant, reliable medical insights with our AI-powered consultant.
                        Accessible, intelligent, and always ready to guide your healthcare journey with accuracy and care.
                    </p>
                    <div className="mt-10">
                        <Link to="/about" className="btn btn-primary">
                            About Us
                        </Link>
                    </div>
                </div>

                {/* Right Side: React Slick Carousel */}
                <div className="hidden lg:block h-[28rem] animate-slideRight mt-[-40px]">
                    <Slider {...settings} className="rounded-box">
                        {images.map((image, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="m-0 w-[30vw] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>

            {/* Divider */}
            <div className="divider divider-start"></div>
        </>
    );
};

Hero.propTypes = {};

export default Hero;
