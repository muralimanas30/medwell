import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaDumbbell, FaBrain, FaUserMd } from 'react-icons/fa';

const teamMembers = [
    { name: 'Revanth Sai',linkedin: 'https://www.linkedin.com/in/revanth-sai-chaparala-000270301/', img: 'https://avatar.iran.liara.run/public/49' },
    { name: 'Rahul Sai',linkedin: 'https://www.linkedin.com/in/rahul-sai-a396242b9/' ,img: 'https://avatar.iran.liara.run/public/23' },
    { name: 'Murali Manas', linkedin: 'https://www.linkedin.com/in/murali-simhadri/',img: 'https://avatar.iran.liara.run/public/14' },
    { name: 'Akshaya Pallapu', linkedin: 'https://www.linkedin.com/in/akshaya-pallapu-774293298/', img: 'https://avatar.iran.liara.run/public/73' }
];

const About = () => {
    return (
        <section className="w-full mx-auto px-6 py-12 bg-gray-100 min-h-screen">
            {/* Breadcrumb Navigation */}
            <div className="breadcrumbs text-sm sm:text-md mb-6 text-gray-600">
                <ul className="flex space-x-2">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link> /</li>
                    <li className="text-blue-500">About Us</li>
                </ul>
            </div>

            {/* Mission Section */}
            <motion.div className="max-w-4xl mx-auto mt-12 bg-white p-8 shadow-lg rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                    MedWell is committed to revolutionizing healthcare with AI. Our goal is to provide
                    personalized health insights, medical guidance, and well-being strategies to help
                    individuals make informed decisions about their health.
                </p>
            </motion.div>

            {/* Core Features */}
            <div className="max-w-5xl mx-auto mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div className="bg-white p-6 rounded-lg shadow-lg w-64"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaHeartbeat className="text-red-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Medical Help</h3>
            <p className="text-gray-500">AI-driven diagnosis, treatment suggestions, and remedies.</p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg w-64"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaDumbbell className="text-blue-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Health & Fitness</h3>
            <p className="text-gray-500">Customized diet, workout, and fitness plans.</p>
          </motion.div>


          <motion.div className="bg-white p-6 rounded-lg shadow-lg w-64"
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <FaUserMd className="text-green-500 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Expert Insights</h3>
            <p className="text-gray-500">AI-powered knowledge base with trusted medical guidance.</p>
          </motion.div>
        </div>
      </div>

            {/* Our Team */}
            <div className="max-w-5xl mx-auto mt-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                            <a href={member.linkedin}>
                                <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-3" />
                            </a>
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}

        </section>
    );
};

export default About;
