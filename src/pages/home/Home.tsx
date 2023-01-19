import React from 'react';
import { AuthState } from '../../context/AuthProvider';
import banner from '../../images/b1.png';
import user1 from '../../images/users/user1.png'
import user2 from '../../images/users/user2.png'
import user3 from '../../images/users/user3.png'

const Home: React.FC = () => {
    const { user } = AuthState();
    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto max-w-6xl">
                    <div className="border-2 border-blue-500 rounded-lg relative">
                        <img src={banner} className="w-full " alt="" />
                    </div>

                    <div className="flex items-center">

                        <img src={user1} alt="" className="rounded-full border-2 border-blue-500" />
                        <div className="px-4 text-left">
                            <h2 className="text-3xl font-medium text-dark my-2">{user?.displayName}</h2>
                            <h4 className="text-xl text-gray-600 font-normal">{"friends count"}</h4>
                            <div className="flex items-center">
                                <img src={user2} alt="" className="w-24 h-24 rounded-full" />
                                <img src={user3} alt="" className="w-24 h-24 rounded-full" />
                            </div>

                        </div>
                    </div>
                    <hr />

                </div>
            </section>
        </div>
    )
}

export default Home
