import { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,   
        });
    }, []);
    return(
    <div>
        <NavbarComponent />
        <div className="bg-cream">
            <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-center pt-24">
                <div
                    className="flex flex-col w-full lg:w-6/12 justify-center items-start text-center lg:text-left mb-5 md:mb-0">
                    <h1 data-aos="fade-right" data-aos-once="true"
                        className="my-4 text-5xl font-bold leading-tight text-darken">
                        Cari Event Lebih Mudah Dengan <span className="text-blue-700">SURVENT</span>
                    </h1>
                    <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300"
                        className="leading-normal text-2xl mb-8">Sekarang udah bukan saatnya #DirumahAja</p>
                    <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300"
                        className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
                        <NavLink to="/map">
                            <button
                                className="lg:mx-0 bg-blue-700 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-100 ease-in-out">
                                SURVENT MAP
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 relative" id="girl">
                    <img data-aos="fade-up" data-aos-once="true" className="w-7/12 mt-10 mx-auto"
                        src="/img/Logo Survent.svg" />
                </div>
            </div>
        </div>

    </div>
    );
}

export default Dashboard;