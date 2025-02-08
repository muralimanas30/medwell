import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Navlinks } from './index';
import { GiHealthNormal } from "react-icons/gi";
import { toggleTheme } from '../features/user/userSlice';

const Navbar = props => {

    const dispatch = useDispatch();
    const handleTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <nav className="bg-base-200">
            <div className="navbar px-16">
                <div className="navbar-start flex items-center gap-x-4 relative">
                    <NavLink to="/" className="hidden md:flex btn btn-primary md:text-2xl items-center pb-0.5 text-xl">
                        Med <GiHealthNormal className="text-primary-content w-5 h-5" />
                        Well
                    </NavLink>

                    <div className="dropdown relative">
                        <button tabIndex={0} className="btn btn-ghost md:hidden">
                            <FaBarsStaggered className="h-6 w-6" />
                        </button>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content absolute mt-3 z-10 p-2 shadow bg-base-200 rounded-box w-52">
                            <Navlinks />
                        </ul>
                    </div>
                </div>


                <div className="navbar-center hidden md:block">
                    <ul className="menu menu-horizontal">
                        <Navlinks />
                    </ul>
                </div>


                <div className="navbar-end">
                    <label className="swap swap-flip">
                        <input type="checkbox" onChange={handleTheme
                        } />
                        <BsSunFill className='swap-on h-4 w-4' />
                        <BsMoonFill className='swap-off h-4 w-4' />
                    </label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {}

export default Navbar