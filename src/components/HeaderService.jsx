import { BriefcaseIcon, ClipboardDocumentCheckIcon, ChartBarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useRef, useContext, useEffect } from "react";

import HomeContext from "../contexts/HomeContext";

export default function HeaderService() {
    const headerServiceRef = useRef(null);
    const context = useContext(HomeContext);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    headerServiceRef.current.classList.remove("opacity-0");
                    headerServiceRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(headerServiceRef.current);
        context.headerServiceRef = headerServiceRef.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={headerServiceRef} className="w-full bg-[#F3F8FA] py-10 opacity-0 duration-1000 transition-all">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="w-full h-full flex justify-betweens items-center gap-4">
                        <div className="bg-[#CDE2EA] p-5 transition-colors">
                            <BriefcaseIcon className="w-8 h-8 text-[#388DA8] transition-colors" />
                        </div>
                        <div className="h-full w-full">
                            <Link to={"/"} className="font-bold heading-font text-[18px] text-[#3e5055] hover:text-[#388DA8] transition-colors">Lorem Ipsum</Link>
                            <p className="text-[14px] text-[#3d4348] pt-1">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-betweens items-center gap-4">
                        <div className="bg-[#CDE2EA] p-5 transition-colors">
                            <ClipboardDocumentCheckIcon className="w-8 h-8 text-[#388DA8] transition-colors" />
                        </div>
                        <div className="h-full w-full">
                            <Link to={"/"} className="font-bold heading-font text-[18px] text-[#3e5055] hover:text-[#388DA8] transition-colors">Dolor Sitema</Link>
                            <p className="text-[14px] text-[#3d4348] pt-1">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-betweens items-center gap-4">
                        <div className="bg-[#CDE2EA] p-5 transition-colors">
                            <ChartBarIcon className="w-8 h-8 text-[#388DA8] transition-colors" />
                        </div>
                        <div className="h-full w-full">
                            <Link to={"/"} className="font-bold heading-font text-[18px] text-[#3e5055] hover:text-[#388DA8] transition-colors">Sed ut perspiciatis</Link>
                            <p className="text-[14px] text-[#3d4348] pt-1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}