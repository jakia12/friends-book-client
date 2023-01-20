import React from 'react'
import Header from '../components/header/Header'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { navItems } from '../data/placeholder';


const Main: React.FC = () => {

    return (
        <div>
            <Header />
            <main className='py-12 bg-gray-100'>
                <div className="container mx-auto md:max-w-7xl px-8">
                    <div className="flex  md:flex-nowrap flex-wrap">
                        <div className="w-full md:w-9/12 bg-white" >
                            <div className="m-3">
                                <Outlet />
                            </div>
                        </div>
                        <div className="w-full md:w-3/12" >
                            <ul className="m-3">
                                {navItems.map((navItem) => {
                                    const { id, navText, navRoute } = navItem;
                                    return (
                                        <li key={id} className="w-full m-3">
                                            <Link to={navRoute}>
                                                <span className="bg-blue-500 py-3 px-10 text-white text-lg font-normal block w-full rounded">
                                                    {navText}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                }

                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>


            <Footer />
        </div>
    )
}

export default Main
