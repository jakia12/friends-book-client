import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle, AiOutlineLogout } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import './Header.css';
const Header: React.FC = () => {
    //state for hamburger menu
    const [isOpen, setIsopen] = useState<boolean>(false);

    //hide user dropdown
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggle = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    //show user dropdown on toggle
    const handleShow = () => {
        showDropdown === true ? setShowDropdown(false) : setShowDropdown(true);
    }


    //nav menu active style
    let activeStyle = {
        backgroundColor: '#075985',
        color: "#fff",
        paddingRight: 11,
        paddingLeft: 11,
        paddingTop: 7,
        paddingBottom: 7
    };


    //logout 

    const handleLogOut = () => {

    }
    return (
        <div className='shadow-lg shadow-gray-100'>

            <nav className="pl-6 pr-4 md:pr-0 md:pl-0  py-4 md:py-1 bg-white border-b border-gray-100 darkBlack:bg-gray-900  darkBlack:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between">
                    <Link to="/" className="flex items-center">

                        <span className="self-center text-xl font-semibold whitespace-nowrap darkBlack:text-white">Thrift Store</span>
                    </Link>

                    <div className="responsive_menu">
                        <button
                            onClick={handleToggle}
                            className="hamburger_icon text-darkBlack">
                            <GiHamburgerMenu />
                        </button>
                        <div

                            className={`side_nav ${isOpen == true ? 'active' : ''}`}

                        >
                            <button
                                className="close_btn "
                                onClick={handleToggle}
                            >
                                <AiFillCloseCircle />
                            </button>
                            <ul className="mobile_menu">

                                <li>
                                    <a
                                        href="/"
                                        className=" list_item text-white px-3 py-2 me-2 rounded  text-capitalize "


                                    >Home</a>
                                </li>
                                <li >
                                    <a
                                        href="/friends"
                                        className="list_item text-white px-3 py-2 me-2 rounded text-capitalize "



                                    >Friends</a>
                                </li>
                                <li >
                                    <a
                                        href="/faq"
                                        className="list_item text-white px-3 py-2 me-2 rounded text-capitalize "



                                    >Faq</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="hidden w-full  md:w-auto md:flex items-center" id="navbar-multi-level">

                        <ul className="flex items-center flex-col px-4 py-3 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white darkBlack:bg-gray-800 md:darkBlack:bg-gray-900 darkBlack:border-gray-700">
                            <li>
                                <NavLink to="/"
                                    className="block   rounded md:bg-transparent text-darkBlackBlack md:p-0 md:darkBlack:text-white darkBlack:bg-blue-600 md:darkBlack:bg-transparent" aria-current="page"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/friends"
                                    className="block pl-3 pr-4  rounded md:bg-transparent text-darkBlack md:p-0 md:darkBlack:text-white darkBlack:bg-blue-600 md:darkBlack:bg-transparent" aria-current="page"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >Friends</NavLink>
                            </li>


                        </ul>
                        {/* user dropdown */}

                        <div className="ml-5 mr-6 flex items-center cursor-pointer relative"
                            onClick={handleShow}
                        >
                            <img src={''} alt="" className='rounded-full w-12 h-12 md:w-14 md:h-14 ' />
                            <button className="text-2xl text-white">
                                <IoMdArrowDropdown />
                            </button>
                            <div
                                className="absolute top-16 z-10 left-0 w-44 p-5 rounded shadow-lg shadow-gray-300 bg-gray-100 "
                                style={{ display: showDropdown === true ? "block" : "none" }}
                            >
                                <ul>
                                    <li className='mb-3'>
                                        <a href="">{""}</a>
                                    </li>
                                    <li>

                                        <button
                                            className='flex items-center justify-center text-base'
                                            onClick={handleLogOut}
                                        >
                                            <span className="text-xl text-dark mr-3"> <AiOutlineLogout /></span>
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>


                </div>
            </nav>

        </div>
    )
}

export default Header
