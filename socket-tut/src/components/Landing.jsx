import React from 'react'
import PropTypes from 'prop-types'
import CustomTitle from './CustomTitle'
import { Link } from 'react-router-dom'
import { BsSdCard } from 'react-icons/bs'
import { Hero, Models, Reviews } from './index'


const Landing = props => {
    return (
        <>
            <Hero />
            <Models onHome={true} />
            <Reviews />
        </>
    )
}

Landing.propTypes = {}

export default Landing