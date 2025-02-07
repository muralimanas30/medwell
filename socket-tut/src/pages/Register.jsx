import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import PropTypes from 'prop-types'
import { Form, redirect } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { SubmitBtn } from '../components'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

export const action = (store)=>async({request})=>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        // const response = await axios.post()
        toast.success('Register triggered successfully',{
            autoClose:1000
        })
        return redirect('/')
    } catch (error) {
        // const error = error.msg 
        toast.error('some error occured')
        return null;
    }
}


const Register = props => {
    return (
        <main className="h-screen grid md:grid-cols-1 place-items-center px-4 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white ">
            {/* Animated Illustration */}
            {/* <DotLottieReact
                src="https://lottie.host/eeae4cf5-f83f-4c29-ba69-78f2618b888c/cuxhmv0bth.lottie"
                loop
                autoplay
                className="hidden md:block max-h-auto  animate-slideTopLeft"
            /> */}

            {/* Register Form Card */}
            <Form method="POST" className="card w-full max-w-md p-8 bg-gray-800 rounded-xl border border-gray-700 animate-slideTop md:animate-slideTopRight transition-transform hover:scale-[1.02]
            flex flex-col gap-y-2 items-center hover-glare shadow-lg shadow-black text-left ">
                <h4 className="text-center text-3xl font-extrabold text-primary ">
                    Join Us Today
                </h4>

                {/* Input Fields */}
                <FormInput type="text" label="Username" name="username" required={true} defaultValue={`James Bond`}/>
                <FormInput type="email" label="Email" name="identifier" required={true} defaultValue={`test@test.com`}/>
                <FormInput type="password" label="Password" name="password" required={true} defaultValue={`secret`}/>

                {/* Buttons */}
                <div className="mt-4 ">
                    <SubmitBtn text="Register" className="btn-primary" />
                </div>
                <button
                    type="button"
                    className="btn btn-secondary btn-block mt-2   w-xs transition-all hover:bg-secondary/80 hover:shadow-lg"
                    onClick={() => {
                        console.log('Register')
                    }}
                >
                    Continue as Guest
                </button>

                {/* Register Link */}
                <p className="text-center mt-4 text-gray-300">
                    Already a member?
                    <Link to="/login" className="ml-2 link link-hover text-primary font-medium tracking-wide transition-all hover:text-secondary">
                        Login
                    </Link>
                </p>
            </Form>
        </main>
    )
}

Register.propTypes = {}

export default Register
