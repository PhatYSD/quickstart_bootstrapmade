import { PlayIcon } from "@heroicons/react/20/solid";
import { useRef, useEffect, useContext } from "react";

import heroBG from "../assets/hero-bg-light.webp";
import HomeContext from "../contexts/HomeContext";

export default function Header() {
    const heroURL = new URL("/images/hero-services-img.webp", import.meta.url);
    const context = useContext(HomeContext);
    const headerRef = useRef(null);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    headerRef.current.classList.remove("opacity-0");
                    headerRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );
        
        observe.observe(headerRef.current);
        context.headerRef = headerRef.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section onFocus={() => console.log(1)} ref={headerRef} id="headerRef" className="w-full h-[984px] relative bg-cover bg-center overflow-hidden opacity-0 duration-1000 transition-all" style={{
            backgroundImage: `url(${heroBG})`
        }}>
            <div className="w-full h-full bg-white bg-opacity-80 absolute top-0 left-0">
                <div className="max-w-[744px] w-full h-full mt-[200px] mx-auto flex flex-col justify-start items-center">
                    <h1 className="font-bold heading-font text-4xl md:text-5xl text-[#3e5055] text-center">Welcome to <span className="text-[#388da8]">QuickStart</span></h1>
                    <p className="mt-[5px] mb-[30px] text-base md:text-[20px] text-[#3e5055] text-center">Quickly start your project now and set the stage for success</p>
                    <div className="flex items-center justify-center gap-[25px] font-medium">
                        <button className="text-[15px] text-white heading-font py-[10px] px-[28px] bg-[#388da8] hover:bg-[#77b6ca] hover:shadow-xl shadow-[#77b6ca] rounded-full transition-all">Get Started</button>
                        <button className="flex justify-center items-center gap-2 hover:text-[#77b6ca] transition"><PlayIcon className="h-8 w-8 text-[#388da8]" /><span>Watch Video</span></button>
                    </div>
                    <img src={heroURL.href} alt="Hero" className="max-h-[600px] h-auto max-w-[600px] w-full" />
                </div>
            </div>
        </section>
    );
}