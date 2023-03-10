import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { AuthState } from '../../context/AuthProvider';
import { updateProfile } from "firebase/auth";


interface FormInput {
    name: string;
    photo: string;
    email: string,
    password: string,
    gender: string

};


const SignUp: React.FC = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<FormInput>();

    const { user, setLoading, loading, createUser, auth } = AuthState();

    //navigate to homepage after signup
    const navigate = useNavigate();

    const [error, setError] = useState<null>();

    //state to display the password as text

    const [isDisplayText, setIsDisplayText] = useState(false);

    const handleSignUp: SubmitHandler<FormInput> = async (data) => {
        console.log(data.name);
        await createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);

                //update username and photoUrl
                updateProfile(user, {
                    displayName: data.name,
                    photoURL: data.photo
                }).then(() => {

                }).catch((error) => {
                    console.log(error)
                });

                alert('User signed up successfully');
                //navigate user to the home page
                navigate('/');

            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            })

    }


    //display password as a text clicking on eye icon
    const handleDisplayText = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        isDisplayText === true ? setIsDisplayText(false) : setIsDisplayText(true);
    }
    return (
        <section className=" register_section lg:py-20 py-14 bg-gray-100">
            <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>
                <div className=' form_wrapper bg-white  px-10 py-10 w-full mx-auto lg:max-w-lg rounded'>
                    <h2 className="text-3xl font-semibold text-dark mt-5 mb-10 text-center">Sign Up Now!</h2>
                    <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-4 text-left">


                        <div className="mb-1">
                            <label


                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>

                            <input
                                type="text"

                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.name ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Your name"
                                {...register("name", {
                                    required: "Name is required",


                                })}


                            />
                            {errors.name && <p className='text-red-500 mt-1'>{errors.name.message}</p>}
                        </div>
                        <div className="mb-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User photo Url</label>

                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="text" placeholder="User Photo Url"
                                {...register("photo", {
                                    required: "User photo Url is required",


                                })}
                            />

                            {errors.photo && <p className='text-red-500 mt-1'>{errors.photo.message}</p>}
                        </div>
                        <div className="mb-1">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.email ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`}
                                placeholder="Your email"
                                {...register("email", {
                                    required: "Email is required",


                                })}
                            />
                            {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Gender</label>
                            <select
                                id="types"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {...register("gender", {
                                    required: "Gender type is required",


                                })}
                            >
                                <option selected>Choose Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>

                            </select>
                            {errors.gender && <p className='text-red-500 mt-1'>{errors.gender.message}</p>}
                        </div>
                        <div className="mb-1 relative">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input
                                type={isDisplayText ? "text" : "password"}
                                id="password"
                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.password ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })}
                            />
                            <button
                                className='absolute top-9 right-4'
                                onClick={handleDisplayText}
                            >
                                {
                                    isDisplayText ?
                                        (
                                            <span className="text-2xl text-dark ">

                                                < MdOutlineRemoveRedEye />
                                            </span>
                                        )
                                        :
                                        (
                                            <span className="text-2xl text-dark ">
                                                <RiEyeCloseLine />
                                            </span>
                                        )
                                }

                            </button>

                            {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                        </div>
                        <button className=" text-white py-2 rounded-lg text-lg  bg-blue-500 hover:bg-blue-900" type="submit">
                            Sign Up
                        </button>
                    </form>
                    <div className="flex justify-between items-center py-6">
                        <span className="text-normal text-dark font-normal ">Have an Account?</span><span className="text-dark text-normal font-normal"> <Link to="/login" className='underline'>Login here</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
