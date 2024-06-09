import { useRef, useContext, useEffect, useState } from "react";
import { CameraIcon, SunIcon, ArchiveBoxIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";

export default function Feature() {
    const featureRef = useRef(null);
    const context = useContext(HomeContext);
    const tabURL1 = new URL("/images/tabs-1.jpg", import.meta.url);
    const tabURL2 = new URL("/images/tabs-2.jpg", import.meta.url);
    const tabURL3 = new URL("/images/tabs-3.jpg", import.meta.url);
    const [active, setActive] = useState(tabURL1.href);
    const [opacity, setOpacity] = useState(100);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    featureRef.current.classList.remove("opacity-0");
                    featureRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(featureRef.current);
        context.featureRef = featureRef.current;

        return () => observe.disconnect();
    }, []);

    useEffect(() => {
        setOpacity(0);

        setTimeout(() => setOpacity(100), 150);
    }, [active]);

    return (
        <section ref={featureRef} id="featureRef" className="w-full bg-white opacity-0 transition-all duration-1000">
            <article className="py-[60px] max-w-[1320px] w-full mx-auto">
                <div className="px-3 pb-[60px]">
                    <h2 className="text-[32px] text-center pb-5 mb-5 heading-font font-bold text-[#3e5055] relative after:content-[''] after:h-[3px] after:w-[50px] after:bg-[#388da8] after:absolute after:bottom-0 after:right-0 after:m-auto after:left-0">Features</h2>
                    <p className="text-[#3d4348] text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="flex w-full h-auto justify-between items-center flex-col lg:flex-row gap-8">
                    <div className="flex-1 flex flex-col justify-center items-center gap-4">
                        <div onClick={() => setTimeout(() => setActive(tabURL1.href), 150)} className={`flex max-w-[696px] lg:max-w-[550px] w-full rounded-[10px] justify-between items-start p-[30px] self-start ${active === tabURL1.href ? "bg-[#EFF6F8]" : "bg-white hover:bg-[#F7FBFC]"} cursor-pointer transition-all`}>
                            <div className="mr-5 p-[13px] bg-white flex justify-center items-center rounded-full shadow-lg">
                                <CameraIcon className="h-[22px] text-[#388DA8] w-[22px]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[20px] heading-font mb-[10px]">Modi sit est dela pireda nest</h4>
                                <p className="text-[15px]">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div onClick={() => setTimeout(() => setActive(tabURL2.href), 150)} className={`flex max-w-[696px] lg:max-w-[550px] w-full rounded-[10px] justify-between items-start p-[30px] self-start ${active === tabURL2.href ? "bg-[#EFF6F8]" : "bg-white hover:bg-[#F7FBFC]"} cursor-pointer transition-all`}>
                            <div className="mr-5 p-[13px] bg-white flex justify-center items-center rounded-full shadow-lg">
                                <ArchiveBoxIcon className="h-[22px] text-[#388DA8] w-[22px]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[20px] heading-font mb-[10px]">Unde praesenti mara setra le</h4>
                                <p className="text-[15px]">Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas</p>
                            </div>
                        </div>
                        <div onClick={() => setTimeout(() => setActive(tabURL3.href), 150)} className={`flex max-w-[696px] lg:max-w-[550px] w-full rounded-[10px] justify-between items-start p-[30px] self-start ${active === tabURL3.href ? "bg-[#EFF6F8]" : "bg-white hover:bg-[#F7FBFC]"} cursor-pointer transition-all`}>
                            <div className="mr-5 p-[13px] bg-white flex justify-center items-center rounded-full shadow-lg">
                                <SunIcon className="h-[22px] text-[#388DA8] w-[22px]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[20px] heading-font mb-[10px]">Pariatur explica nitro dela</h4>
                                <p className="text-[15px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img className={`w-[636px] h-[636px] rounded-[15px] opacity-${opacity} transition-all`} src={active} alt="tabs images" />
                    </div>
                </div>
            </article>
        </section>
    );
}