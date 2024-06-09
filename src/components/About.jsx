import { useEffect, useContext, useRef } from "react";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";
import AboutSupport from "./AboutSupport";

export default function About() {
    const aboutRef = useRef(null);
    const context = useContext(HomeContext);
    const aboutURL1 = new URL("/images/about-company-1.jpg", import.meta.url);
    const aboutURL2 = new URL("/images/about-company-2.jpg", import.meta.url);
    const aboutURL3 = new URL("/images/about-company-3.jpg", import.meta.url);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    aboutRef.current.classList.remove("opacity-0");
                    aboutRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(aboutRef.current)
        context.aboutRef = aboutRef.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={aboutRef} id="aboutRef" className="w-full bg-white opacity-0 transition-all duration-1000">
            <article className="max-w-[1320px] w-full mx-auto pt-[50px] pb-5 flex justify-between items-center flex-col lg:flex-row">
                <div className="flex-1 px-3">
                    <p className="mb-[15px] text-[#8B8E91]">WHO WE ARE</p>
                    <h3 className="text-[32px] heading-font leading-[1.2] text-[#3e5055] font-bold pb-2">Unleashing Potential with Creative Strategy</h3>
                    <p className="text-[#3d4348] italic pb-4 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="pb-[10px] pt-2">
                        <span className="text-[#3d4348]"><CheckCircleIcon className="h-6 w-6 text-[#388da8] me-1 inline-block" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </div>
                    <div className="pb-[10px] pt-2">
                        <span className="text-[#3d4348]"><CheckCircleIcon className="h-6 w-6 text-[#388da8] me-1 inline-block" /> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                    </div>
                    <div className="pb-[10px] pt-2">
                        <span className="text-[#3d4348] leading-6"><CheckCircleIcon className="h-6 w-6 text-[#388da8] me-1 inline-block" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                    </div>
                    <button className="group flex justify-start items-center py-3 px-6 bg-[#388da8] hover:bg-[#77b6ca] heading-font font-medium rounded-[5px] gap-[5px] transition-colors"><div className="text-white">Read More</div> <ArrowRightIcon className="text-white h-[19px] group-hover:translate-x-1 transition-transform duration-300" /></button>
                </div>
                <div className="flex-1 flex justify-between items-center flex-col md:flex-row">
                    <div className="flex-1 px-3 mt-6">
                        <img src={aboutURL1.href} className="w-full max-w-[696px] rounded-[10px] object-cover shadow" alt="about company 1" />
                    </div>
                    <div className="flex-1 px-3 mt-6 flex flex-col justify-start items-center gap-6">
                        <img src={aboutURL2.href} className="w-full max-w-[696px] rounded-[10px] object-cover shadow" alt="about company 2" />
                        <img src={aboutURL3.href} className="w-full max-w-[696px] rounded-[10px] object-cover shadow" alt="about company 3" />
                    </div>
                </div>
            </article>
            <AboutSupport />
        </section>
    );
}