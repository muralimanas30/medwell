import { FaExternalLinkAlt } from "react-icons/fa";
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './index';
import { Link } from "react-router-dom";
import { modelsData } from '../utils/modelsData.js';

const Models = ({ onHome, heading, subHeading }) => {
    return (
        <section className="mx-auto p-6 ">
            <div className="text-center space-y-4 animate-popIn">
                <h1 className="md:text-4xl sm:text-3xl text-2xl
                font-bold text-primary">{heading || `Try Our AI-Enhanced Chatbot`}</h1>
                <p className="md:text-lg sm:text-md text-gray-500 max-w-2xl mx-auto">{subHeading || `Experience next-gen AI with our interactive models.`}
                </p>
            </div>

            <div className="mt-8 w-full flex flex-wrap gap-10 animate-slideBottom justify-around">
                {modelsData.map(({ img, title, text, path,chatType }, index) => (
                    <Card
                        key={index}
                        img={img}
                        title={title}
                        text={text}
                        path={path}
                        chatType={chatType}
                        onHome={onHome}
                    />
                ))}
            </div>

            {onHome && (
                <div className="mt-8 mx-auto w-full text-center">
                    <Link
                        to="/models"
                        className="btn btn-secondary"
                        aria-label="Visit AI models"
                    >
                        Visit <FaExternalLinkAlt />
                    </Link>
                    <span className="text-primary"> and try our models now</span>
                </div>
            )}
        </section>
    );
};

Models.propTypes = {
    heading: PropTypes.string,
    onHome: PropTypes.bool,
    subHeading: PropTypes.string
}

export default Models;
