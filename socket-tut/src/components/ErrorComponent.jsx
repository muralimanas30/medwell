import React from 'react'
import PropTypes from 'prop-types'
import { Link, useRouteError } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ErrorComponent = props => {
    const error = useRouteError();

    console.dir(error, { depth: null });
    if (error.status === 404) {
        return (
            <main className="h-screen w-auto grid place-items-center px-8">
                <div className="text-center">
                    <DotLottieReact
                        src="https://lottie.host/e1954e6b-0ea0-4dde-a0c6-9aa91dfbd9b9/WFf2fokmZS.lottie"
                        loop
                        autoplay
                        className='h-64'
                    />
                    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Page Not Found</h1>
                    <p className="mt-6 text-lg leading-7">
                        Sorry we couldnt find the page you are looking for
                    </p>
                    <div className="mt-10">
                        <Link to='/' className='btn btn-primary'>
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main className="h-screen w-auto grid place-items-center px-8">
            <div className="text-center">
                <DotLottieReact
                    src="https://lottie.host/a29fb40c-bdb3-43dd-9431-b34e9f21a80f/qX7KAi1YQK.lottie"
                    loop
                    autoplay
                />

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Oops !!</h1>
                <p className="mt-6 text-lg leading-7">
                    There was an error :/
                </p>
                <div className="mt-10">
                    <Link to='/' className='btn btn-primary'>
                        Go Back Home
                    </Link>
                </div>
            </div>
        </main>
    )
}

ErrorComponent.propTypes = {}

export default ErrorComponent