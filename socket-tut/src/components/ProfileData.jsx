import React from "react";
import { Form, redirect } from "react-router-dom";
import { FormInput, FormCheckbox } from "./index";
import FormRadiobox from "./FormRadiobox";
import { toast } from "react-toastify";
import { loginUser, updateUser } from "../features/user/userSlice";
import axios from "axios";

const url = 'https://medwell-backend.onrender.com/user/updateUser/';
export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries())
    const token = store.getState().userState?.user?.token;
    const userId = store.getState().userState?.user?.userId;

    store.dispatch(updateUser(data));
    
    const response = await axios.patch(url + userId, data, {
        headers: { Authorization: `Bearer ${token}` }
    })
    try {
        // store.dispatch(loginUser(data))
        toast.success('Profile Updated', {
            autoClose: 1000
        })
        return redirect('/')

    } catch (error) {
        toast.error('Form Data Submission Error', {
            autoClose: 1000
        })
        console.log(error);
    }
    return null;
}


const ProfileData = () => {
    return (
        <section className="py-12 px-6 md:px-20 lg:px-40 w-full">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Info Box */}
                <div className="md:order-1 w-full lg:w-auto">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-medium text-gray-800 mb-4">
                            Tell us more about yourself
                        </h3>
                        <p className="text-gray-600">
                            This information will help us provide you with more accurate and
                            personalized health insights.
                        </p>
                    </div>
                </div>


                <div className="md:order-2">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                            Profile Info
                        </h2>
                        <Form
                            method="POST"
                            className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <FormInput
                                label="Age"
                                type="number"x
                                name="age"
                                defaultValue="25"
                                required={true}
                                className="bg-primary w-full"
                            />

                            <FormRadiobox
                                label="Gender"
                                name="gender"
                                defaultChecked=""
                                options={[
                                    { value: "male", label: "Male" },
                                    { value: "female", label: "Female" },
                                ]}
                                onChange={(e) => console.log(e.target.value)}
                                required={true}

                            />

                            <FormInput
                                label="Height (cm)"
                                type="number"
                                name="height"
                                defaultValue="175"
                                required={true}
                                className="w-full"
                            />

                            <FormInput
                                label="Weight (kg)"
                                type="number"
                                name="weight"
                                defaultValue="70"
                                required={true}
                                className="w-full"
                            />

                            <FormInput
                                label="Allergies"
                                type="text"
                                name="allergies"
                                defaultValue=""
                                placeholder="Space separated"
                                className="w-full"
                            />

                            <FormInput
                                label="diseases"
                                type="text"
                                name="diseases"
                                defaultValue=""
                                placeholder="Space separated"
                                className="w-full"
                            />

                            <FormCheckbox label="Smoker" name="smoker" defaultValue={false} />

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                            >
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileData;
