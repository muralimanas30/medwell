import React from 'react';
import PropTypes from 'prop-types';
import { Review } from './index';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        name: 'Alice Johnson',
        content: 'The health chatbot provided me with personalized diet tips that really improved my energy levels!',
    },
    {
        name: 'Mark Thompson',
        content: 'I love how the fitness chatbot keeps me motivated with daily workout suggestions and reminders.',
    },
    {
        name: 'Sarah Lee',
        content: 'The medical aid chatbot helped me understand my symptoms better and guided me to seek proper care.',
    },
    {
        name: 'David Kim',
        content: 'Thanks to the wellness chatbot, I have adopted healthier habits and feel more balanced in my life.',
    },
    {
        name: 'Emily Davis',
        content: "The AI chatbot's advice on nutrition was spot on! I've lost weight and feel fantastic.",
    },
    {
        name: 'John Smith',
        content: 'I appreciate the personalized fitness plans from the chatbot; they fit perfectly into my busy schedule.',
    },
    {
        name: 'Jessica Brown',
        content: 'The medical chatbot provided me with reliable information about my condition, which eased my worries.',
    },
    {
        name: 'Michael Wilson',
        content: "I found the wellness chatbot's mindfulness tips incredibly helpful for managing stress and anxiety.",
    },
    {
        name: 'Laura Garcia',
        content: "The health chatbot's meal planning feature has made grocery shopping so much easier and healthier!",
    },
    {
        name: 'Chris Martinez',
        content: 'I was impressed by how the fitness chatbot tailored workouts to my specific goals and preferences.',
    },
];

const settings = {
    infinite: true,
    slidesToShow: 3,
    arrow:false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Reviews = (props) => {
    return (
        <>
            <div className="divider"></div>
            <div className="review-container mx-12">
                <h2 className="text-xl font-medium tracking-tight text-center mb-6 md:text-3xl sm:text-2xl">
                    Here's what our clients say from their experience
                </h2>
                <div className="slider-container">
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <Review {...review} key={index} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

Reviews.propTypes = {};

export default Reviews;
