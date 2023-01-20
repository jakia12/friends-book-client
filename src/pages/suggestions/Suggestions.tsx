import React from 'react'
import { AuthState } from '../../context/AuthProvider'
import userPhoto from '../../images/users/u.jpg'

const Suggestions: React.FC = (): JSX.Element => {
    const { user } = AuthState();

    return (
        <section>
            <div className="flex items-center">
                <div className='w-full sm:w-full md:w-4/12'>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src={userPhoto} alt="" />
                        </a>
                        <div className="p-5 flex items-center justify-between">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {user?.displayName}
                                </h5>
                            </a>

                            <a href="#" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Add Friend

                            </a>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    )
}

export default Suggestions
