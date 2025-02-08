import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const About = props => {
    return (
        <section className="w-full mx-auto px-0 py-0">
            <div className="sm:ml-12 breadcrumbs text-sm sm:text-md">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>

        </section>
    )
}

About.propTypes = {}

export default About