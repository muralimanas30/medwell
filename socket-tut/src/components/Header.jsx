import React from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/user/userSlice'


const Header = props => {
    const navigate = useNavigate();
    const user = useSelector(state => state.userState.user)
    const dispatch = useDispatch();
    const handleLogout = () => {
        navigate('/');
        dispatch(logoutUser())
    }
    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className="align-element flex justify-center sm:justify-end">
                {/* USER */}
                {user ?
                    (<div className="flex gap-x-2 sm:gap-x-8 items-center">
                        <p className="text-xs sm:text-sm">Hello, {user.name}</p>
                        <button className="btn btn-xs btn-outline btn-primary"
                            onClick={handleLogout}>
                            logout
                        </button>
                    </div>) : (
                        <div className="flex gap-x-6 justify-center items-center">
                            <Link to='/login' className='link link-hover text-xs sm:text-sm'>
                                Sign in / Guest
                            </Link>
                            <Link to='/register' className='link link-hover text-xs sm:text-sm'>
                                Create Account
                            </Link>

                        </div>
                    )
                }
                {/* LINKS */}

            </div>
        </header>
    )
}

Header.propTypes = {

}

export default Header
