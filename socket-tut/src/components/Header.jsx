import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Header = props => {
    return (
        <header className="bg-neutral text-white tracking-wider py-2 group hover:bg-neutral transition duration-100 w-full">
            <div className="align-element flex justify-center sm:justify-end">
                <div className="flex gap-x-6 justify-center items-center">
                    <Link to={`/login`} className='link link-hover text-xs sm:text-sm hover:underline underline-offset-5'>
                        Login
                    </Link>
                    <Link to={`/register`} className='link link-hover text-xs sm:text-sm hover:underline underline-offset-5'>
                        Create Account
                    </Link>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {}

export default Header