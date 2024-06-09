import { useRef, useEffect, useContext } from "react";
import { SunIcon, CheckBadgeIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";

export default function FeatureSub2() {
    const featureURL = new URL("/images/features-2.jpg", import.meta.url);
    const featureSub2 = useRef(null);
    const context = useContext(HomeContext);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    featureSub2.current.classList.remove("opacity-0");
                    featureSub2.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(featureSub2.current);
        context.featureSub2Ref = featureSub2.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={featureSub2} className="py-[60px] max-w-[1320px] w-full mx-auto flex justify-between items-center flex-col lg:flex-row opacity-0 transition-opacity duration-1000 gap-8">
            <div className="flex-1 flex justify-start">
                <div className="p-[30px] w-fit bg-[#EFF6F8] rounded-[10px]">
                    <h3 className="text-[26px] text-[#3e5055] heading-font font-bold mb-[15px] max-w-[466px] leading-8">Neque ipsum omnis sapiente quod quia dicta</h3>
                    <p className="mb-4 max-w-[466px] opacity-50">Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares</p>
                    <p className="mb-[10px] opacity-50"><ComputerDesktopIcon className="h-6 mr-2 text-[#388da8] inline-block" />Et corporis ea eveniet ducimus.</p>
                    <p className="mb-[10px] opacity-50"><CheckBadgeIcon className="h-6 mr-2 text-[#388da8] inline-block" />Exercitationem dolorem sapiente.</p>
                    <p className="mb-[20px] opacity-50"><SunIcon className="h-6 mr-2 text-[#388da8] inline-block" /> Veniam quia modi magnam.</p>
                    <button className="text-white py-[6px] px-[30px] bg-[#388da8] hover:bg-[#77b6ca] rounded-md max-w-[466px] transition-colors">Learn More</button>
                </div>
            </div>
            <div className="flex-1 px-3">
                <img src={featureURL.href} alt="features-1.jpg" className="max-w-[636px] w-full rounded-[15px]" />
            </div>
        </section>
    );
}