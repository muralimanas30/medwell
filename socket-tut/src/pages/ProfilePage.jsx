import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ProfileData } from '../components'
const ProfilePage = props => {
    return (
        <section className="w-full mx-auto bg-base-200 px-0 py-0">
            <div className="sm:ml-12 breadcrumbs text-sm sm:text-md">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </div>
            <ProfileData/>
        </section>
    )
}

ProfilePage.propTypes = {}

export default ProfilePage