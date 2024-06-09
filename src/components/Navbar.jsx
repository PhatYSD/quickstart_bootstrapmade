import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";

function handleScrollJump(currentRef) {
    const position = currentRef.getBoundingClientRect();
    return scrollBy({
        behavior: "smooth",
        top: position.y - 100
    });
}

export default function Navbar() {
    const logoURL = new URL("/images/logo.png", import.meta.url);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const context = useContext(HomeContext);
    const navbarRef = useRef(null);
    const homeRef = useRef(null);
    const featureRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const pricingRef = useRef(null);
    const contactRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);

        if (scrollPosition == 0) {
            homeRef.current.classList.add("text-[#77b6ca]");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (navbarRef.current) {
            if (scrollPosition >= 100) {
                navbarRef.current.classList.add("bg-opacity-90");
                navbarRef.current.classList.add("shadow-lg");
            } else {
                navbarRef.current.classList.remove("bg-opacity-90");
                navbarRef.current.classList.remove("shadow-lg");
            }
        }

        if (homeRef.current && context.headerRef) {
            const position = context.headerServiceRef.getBoundingClientRect();

            if (-(position.height - 101) <= position.y) {
                homeRef.current.classList.add("text-[#77b6ca]");
            } else {
                homeRef.current.classList.remove("text-[#77b6ca]");
            }
        }

        if (aboutRef.current && context.aboutRef) {
            const position = context.aboutRef.getBoundingClientRect();

            if (-(position.height - 101) <= position.y && position.y <= 101) {
                aboutRef.current.classList.add("text-[#77b6ca]");
            } else {
                aboutRef.current.classList.remove("text-[#77b6ca]");
            }
        }

        if (featureRef.current && context.featureRef && context.featureSub2Ref) {
            const positionUp = context.featureRef.getBoundingClientRect();
            const positionDown = context.featureSub2Ref.getBoundingClientRect();

            if (-(positionDown.height - 101) <= positionDown.y && positionUp.y <= 101) {
                featureRef.current.classList.add("text-[#77b6ca]");
            } else {
                featureRef.current.classList.remove("text-[#77b6ca]");
            }
        }

        if (serviceRef.current && context.serviceRef && context.serviceSubRef) {
            const positionUp = context.serviceRef.getBoundingClientRect();
            const positionDown = context.serviceSubRef.getBoundingClientRect();

            if (-(positionDown.height - 101) <= positionDown.y && positionUp.y <= 101) {
                serviceRef.current.classList.add("text-[#77b6ca]");
            } else {
                serviceRef.current.classList.remove("text-[#77b6ca]");
            }
        }

        if (pricingRef.current && context.pricingRef && context.testimonialRef) {
            const positionUp = context.pricingRef.getBoundingClientRect();
            const positionDown = context.testimonialRef.getBoundingClientRect();

            if (-(positionDown.height - 101) <= positionDown.y && positionUp.y <= 101) {
                pricingRef.current.classList.add("text-[#77b6ca]");
            } else {
                pricingRef.current.classList.remove("text-[#77b6ca]");
            }
        }

        if (contactRef.current && context.contactRef) {
            const positionUp = context.contactRef.getBoundingClientRect();

            if (positionUp.y <= 101) {
                contactRef.current.classList.add("text-[#77b6ca]");
            } else {
                contactRef.current.classList.remove("text-[#77b6ca]");
            }
        }
    }, [scrollPosition]);

    useEffect(() => {
        if (screenWidth > 1024) {
            setOpenMenu(false);
        }
    }, [screenWidth]);

    return (
        <header ref={navbarRef} className={`w-full h-[100px] flex items-center fixed transition-colors bg-white z-[999]`}>
            <nav className="max-w-[1320px] w-full h-[60px] mx-auto flex justify-between items-center">
                <div className="h-full ml-4">
                    <NavLink to={"/"} className={"h-full flex items-center gap-2"}>
                        <img src={logoURL.href} alt="QuickStart Logo" className="h-6 sm:h-9" />
                        <h1 className="heading-font text-2xl sm:text-3xl text-[#3E5055] font-bold">QuickStart</h1>
                    </NavLink>
                </div>
                <div className="nav-font h-full text-[#313336] flex justify-end me-4 items-center">
                    <NavLink to={"/"} ref={homeRef} onClick={() => context.headerRef.scrollIntoView({ behavior: 'smooth' })} className={"py-[18px] px-[15px] hover:text-[#77b6ca] hidden lg:block transition-colors"}>Home</NavLink>
                    <NavLink to={"/"} ref={aboutRef} onClick={() => handleScrollJump(context.aboutRef)} className={"py-[18px] px-[15px] hover:text-[#77b6ca] hidden lg:block transition-colors"}>About</NavLink>
                    <NavLink to={"/"} ref={featureRef} onClick={() => handleScrollJump(context.featureRef)} className={"py-[18px] px-[15px] hover:text-[#77b6ca] hidden lg:block transition-colors"}>Features</NavLink>
                    <NavLink to={"/"} ref={serviceRef} onClick={() => handleScrollJump(context.serviceRef)} className={"py-[18px] px-[15px] hover:text-[#77b6ca] hidden lg:block transition-colors"}>Services</NavLink>
                    <NavLink to={"/"} ref={pricingRef} onClick={() => handleScrollJump(context.pricingRef)} className={"py-[18px] px-[15px] hover:text-[#77b6ca] hidden lg:block transition-colors"}>Pricing</NavLink>
                    <NavLink to={"/"} ref={contactRef} onClick={() => handleScrollJump(context.contactRef)} className={"py-[18px] px-[15px] hover:text-[#77b6ca] hidden lg:block transition-colors"}>Contact</NavLink>
                    <NavLink to={"/"} className={"py-2 px-[20px] text-[14px] text-white bg-[#388da8] hover:bg-[#77b6ca] rounded-full transition-colors ml-8"}>Get Started</NavLink>
                    <button className={`w-8 mx-4 lg:hidden ${openMenu ? "hidden" : "block"}`} onClick={() => setOpenMenu(prev => !prev)}><Bars3Icon /></button>
                </div>
            </nav>
            <div className={`w-screen h-screen bg-black bg-opacity-60 absolute z-10 top-0 left-0 justify-center items-center ${openMenu ? "flex" : "hidden"}`} onClick={e => setOpenMenu(false)}>
                <div className="w-[94%] h-[92%] flex flex-col justify-between items-center" onClick={e => e.stopPropagation()}>
                    <button className="flex-shrink w-8 h-8 mb-4 self-end" onClick={() => setOpenMenu(false)}>
                        <XMarkIcon className="text-white" />
                    </button>
                    <div className="flex-grow w-full h-full rounded-md bg-white nav-font text-[#313336]" onClick={() => setOpenMenu(prev => !prev)}>
                        <NavLink to={"/"} onClick={() => context.headerRef.scrollIntoView({ behavior: 'smooth' })} className={"py-[12px] px-[15px] text-[17px] mt-2 hover:text-[#77b6ca] block transition-colors"}>Home</NavLink>
                        <NavLink to={"/"} onClick={() => handleScrollJump(context.aboutRef)} className={"py-[12px] px-[15px] text-[17px] hover:text-[#77b6ca] block transition-colors"}>About</NavLink>
                        <NavLink to={"/"} onClick={() => handleScrollJump(context.featureRef)} className={"py-[12px] px-[15px] text-[17px] hover:text-[#77b6ca] block transition-colors"}>Features</NavLink>
                        <NavLink to={"/"} onClick={() => handleScrollJump(context.serviceRef)} className={"py-[12px] px-[15px] text-[17px] hover:text-[#77b6ca] block transition-colors"}>Services</NavLink>
                        <NavLink to={"/"} onClick={() => handleScrollJump(context.pricingRef)} className={"py-[12px] px-[15px] text-[17px] hover:text-[#77b6ca] block transition-colors"}>Pricing</NavLink>
                        <NavLink to={"/"} onClick={() => handleScrollJump(context.contactRef)} className={"py-[12px] px-[15px] text-[17px] hover:text-[#77b6ca] block transition-colors"}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}