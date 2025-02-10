import React from 'react';
import { Models } from '../components';
import { Link } from 'react-router-dom';

const ModelPage = () => {
    return (
        <section className="w-full bg-base-200 mx-auto px-0 py-0">
            <div className="sm:ml-12 breadcrumbs text-sm sm:text-md">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/models'>Models</Link>
                    </li>
                </ul>
            </div>
            <div className="mt-8">
                <Models onHome={false} heading={`Explore AI-Powered Health & Wellness`} subHeading={`Choose from our AI-driven models to receive personalized insights on health, wellness, and medical assistance.`} />
            </div>

            {/* Additional Information Section */}
            <div className="mt-16 text-center space-y-6">
                <h2 className="text-2xl font-semibold text-primary">How It Works</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Select a category that fits your needs. Each AI model offers real-time suggestions, medical insights, and tailored recommendations.
                </p>
                <ul className="list-disc list-inside text-gray-500 max-w-2xl mx-auto text-left">
                    <li><span className="font-medium text-gray-700">Health:</span> Personalized dietary and lifestyle recommendations.</li>
                    <li><span className="font-medium text-gray-700">Well-Being:</span> Fitness plans, mindfulness, and stress management.</li>
                    <li><span className="font-medium text-gray-700">Medical Aid:</span> AI-assisted diagnostics, symptom analysis, and treatment options.</li>
                </ul>
            </div>

            {/* Call-to-Action Section */}
            <div className="mt-12 text-center">
                <p className="text-gray-600">Not sure where to start?</p>
            </div>
        </section>
    );
};

export default ModelPage;
