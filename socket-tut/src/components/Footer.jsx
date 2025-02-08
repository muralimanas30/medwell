import React from 'react'
import PropTypes from 'prop-types'
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from 'react-icons/fa';

const Footer = props => {
    return (
        <>
            <div className="divider"></div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    MEDWELL
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaLinkedin />
                        </a>
                        <a>
                            <FaLinkedin />
                        </a>
                        <a>
                            <FaLinkedin />
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    )
}

Footer.propTypes = {}

export default Footer