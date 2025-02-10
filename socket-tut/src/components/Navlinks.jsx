import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const links = [
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: 'about', text: 'about' },
    { id: 3, url: 'models', text: 'chat' },
    { id: 4, url: 'profile', text: 'profile' },
    { id: 5, url: 'video', text: 'Consult Doctor' },
];

const Navlink = props => {
    return (
        <>
            {links.map((link, id) => {

                const { text, url } = link;
                return <li key={id}>
                    <NavLink to={url} className="capitalize font-bold">
                        {text}
                    </NavLink>
                </li>
            })}
        </>
    )
}

Navlink.propTypes = {}

export default Navlink