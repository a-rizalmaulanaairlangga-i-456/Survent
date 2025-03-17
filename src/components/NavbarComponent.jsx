import React from 'react';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import TimeComponent from './TimeComponent';

export default function NavbarComponent(){
    const [isOpen, setIsOpen] = useState(false);

    return (
    <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center bg-white rounded-lg px-5">
                    <img src="/img/Logo_Survent_Landscape.svg" className="mr-3 h-12" alt="Logo Survent" />
                </a>
                <div className="flex items-center lg:order-2">
                    <TimeComponent/>
                    <button onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile_menu"
                            aria-expanded={isOpen}>
                            <span className="sr-only">Open Menu</span>
                            {isOpen ? (
                                <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                                </svg>
                            ) : (
                                <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                                </svg>
                            )}
                    </button>
                </div>
                <div className={`${isOpen ? "flex" : "hidden"} flex-col mt-4 lg:flex lg:flex-row lg:space-x-8 lg:mt-0 lg:w-auto lg:order-1 w-full`}>
                <ul className="flex flex-col mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 rounded lg:p-0 ${
                                    isActive ? "text-gray-200 font-bold" : "text-gray-300"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/map"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 border-gray-100 lg:border-0 lg:p-0 ${
                                    isActive ? "text-gray-200 font-bold" : "text-gray-300"
                                }`
                            }
                        >
                            Map
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 border-gray-100 lg:border-0 lg:p-0 ${
                                    isActive ? "text-gray-200 font-bold" : "text-gray-300"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}