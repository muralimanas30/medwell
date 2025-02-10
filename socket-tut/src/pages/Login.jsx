import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import PropTypes from 'prop-types'
import { Form,redirect } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { SubmitBtn } from '../components'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
import axios from 'axios'
import { getAllChats } from '../features/chat/chatSlice'
export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    const url = 'https://medwell-backend.onrender.com/auth/login'
    try {
        const response = await axios.post(url,data);
        toast.success('Login triggered successfully', {
            autoClose: 1000
        });
        store.dispatch(loginUser(response.data))
        store.dispatch(getAllChats())
        return redirect('/')
    } catch (error) {
        
        console.log(error);
        toast.error('some error occured')
        return null;
    }
}
const Login = props => {

    return (
        <main className="h-screen grid md:grid-cols-1 place-items-center px-4 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white ">
            {/* Animated Illustration */}
            {/* <DotLottieReact
                src="https://lottie.host/eeae4cf5-f83f-4c29-ba69-78f2618b888c/cuxhmv0bth.lottie"
                loop
                autoplay
                className="hidden md:block max-h-auto  animate-slideTopLeft"
            /> */}

            {/* Login Form Card */}
            <Form method="POST" className="card w-full max-w-md p-8 bg-gray-800 rounded-xl border border-gray-700 animate-slideTop md:animate-slideTopRight transition-transform hover:scale-[1.02]
            flex flex-col gap-y-2 items-center hover-glare shadow-lg shadow-black text-left ">
                <h4 className="text-center text-3xl font-extrabold text-primary ">
                    Welcome Back
                </h4>

                {/* Input Fields */}
                <FormInput className="text-white" type="email" label="Email" name="email" required={true} defaultValue={`test12345@gmail.com`}/>
                <FormInput className="font-white" type="password" label="Password" name="password" required={true} defaultValue={`secret`}/>

                {/* Buttons */}
                <div className="mt-4 ">
                    <SubmitBtn text="Login" className="btn-primary" />
                </div>
                <button
                    type="button"
                    className="btn btn-secondary btn-block mt-2 transition-all hover:bg-secondary/80 hover:shadow-lg"
                    onClick={() => {
                        console.log('login')
                    }}
                >
                    Continue as Guest
                </button>

                {/* Register Link */}
                <p className="text-center mt-4 text-gray-300">
                    Not a member yet?
                    <Link to="/register" className="ml-2 link link-hover text-primary font-medium tracking-wide transition-all hover:text-secondary">
                        Register
                    </Link>
                </p>
            </Form>
        </main>
    )
}

Login.propTypes = {}

export default Login
