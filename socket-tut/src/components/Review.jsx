import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ name, content }) => {
    return (
        <div className="shadow-lg rounded-lg p-6 w-96 mx-auto">
            <h2 className="text-lg font-semibold ">{name || 'Anonymous'}</h2>
            <p className="mt-2">{content || 'No review available.'}</p>
        </div>
    );
};

Review.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
};

export default Review;
