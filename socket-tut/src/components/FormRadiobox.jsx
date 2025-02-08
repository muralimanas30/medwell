import React from 'react';
import PropTypes from 'prop-types';

const FormRadiobox = ({ label, name, defaultChecked, options, ...rest }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text capitalize">{label}</span>
            </label>
            <div className="flex gap-3 flex-wrap">
                {options.map((option) => (
                    <label key={option.value} className="label cursor-pointer inline-flex items-center"> {/* inline-flex added */}
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            defaultChecked={defaultChecked === option.value}
                            className="radio mr-2"
                            {...rest}
                        />
                        <span className="label-text">{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

// ... (propTypes remain the same)

export default FormRadiobox;