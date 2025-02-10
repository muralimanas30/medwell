import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { chatCategories } from '../utils/symptoms';

const Symptoms = ({ onSubmit,setShowSymptoms,userOptions }) => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    userOptions ||= chatCategories["dietChat"]
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedSymptoms((prev) =>
            checked ? [...prev, value] : prev.filter((symptom) => symptom !== value)
        );
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <h2 className="text-lg font-bold mb-3 text-center">Select Symptoms</h2>

                {/* Scrollable Grid */}
                <div className="max-h-80 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-2 border border-gray-300 rounded-lg">
                    {userOptions.map((symptom, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`symptom-${index}`}
                                value={symptom}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <label htmlFor={`symptom-${index}`} className="ml-2 text-gray-700">
                                {symptom}
                            </label>
                        </div>
                    ))}
                </div>
                {/* Submit Button */}
                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        onClick={() => onSubmit(selectedSymptoms)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                    <button className='btn btn-error' type='button' onClick={()=>setShowSymptoms(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

Symptoms.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    setShowSymptoms: PropTypes.func,
    userOptions: PropTypes.array
};

export default Symptoms;
