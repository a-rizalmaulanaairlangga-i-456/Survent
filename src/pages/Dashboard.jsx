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
            <div className="max-w-screen-xl px-8 mx-auto flex flex-col items-center pt-24">
                <div className="flex flex-col-reverse lg:flex-start lg:flex-row items-center">
                    <div className="flex flex-col w-full lg:w-6/12 justify-center items-start text-center lg:text-left mb-5 md:mb-0">
                        <h1 data-aos="fade-right" data-aos-once="true"
                            className="my-4 text-2xl lg:text-5xl font-bold leading-tight text-darken">
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
                <div className="sm:flex items-center sm:space-x-8 mt-36">
                    <div data-aos="fade-right" className="sm:w-1/2 relative">
                        <div className="bg-blue-400 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
                        <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">Jelajahi Event-Event Disekitarmu, Kamu bisa mulai dengan<span className="text-blue-700"> SURVENT</span></h1>
                        <p className="py-5 lg:pr-32">SURVENT membantumu menemukan berbagai event menarik di sekitarmu dengan mudah. Temukan konser, seminar, festival, dan acara seru lainnya hanya dalam satu platform. Mulai petualangan event-mu sekarang dengan SURVENT!</p>
                    </div>
                    <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
                        <div className="bg-blue-300 floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
                        <img className="rounded-xl z-40 relative" src="/img/map-normal.png" alt=""/>
                        <div className="bg-blue-700 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    );
}

export default Dashboard;