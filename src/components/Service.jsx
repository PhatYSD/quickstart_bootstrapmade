import { useContext, useRef, useEffect } from "react";
import { ArrowTrendingUpIcon, ArrowRightIcon, WifiIcon, ComputerDesktopIcon, HashtagIcon, CalendarDaysIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";

export default function Service() {
    const context = useContext(HomeContext);
    const serviceRef = useRef(null);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    serviceRef.current.classList.remove("opacity-0");
                    serviceRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(serviceRef.current);
        context.serviceRef = serviceRef.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={serviceRef} className="w-full bg-[#F9FBFC] opacity-0 transition-all duration-1000">
            <article className="py-[60px] max-w-[1320px] w-full mx-auto">
                <div className="px-3 pb-[60px]">
                    <h2 className="text-[32px] text-center pb-5 mb-5 heading-font font-bold text-[#3e5055] relative after:content-[''] after:h-[3px] after:w-[50px] after:bg-[#388da8] after:absolute after:bottom-0 after:right-0 after:m-auto after:left-0">Services</h2>
                    <p className="text-[#3d4348] text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 px-6 gap-12">
                    <div className="group min-h-[174px] lg:h-[222px] w-[98%] sm:w-[694.4px] lg:w-[442.4px] xl:w-[532.4px] bg-white shadow hover:shadow-lg rounded-[10px] justify-self-center lg:justify-self-end transition-all duration-300 cursor-pointer">
                        <div className="p-[30px] flex justify-between items-start gap-[25px]">
                            <div className="border border-[#0dcaf0] bg-[#0dcaf0] bg-opacity-10 rounded-[10px]">
                                <ArrowTrendingUpIcon className="h-[72px] p-[15px] text-[#0dcaf0]" />
                            </div>
                            <div>
                                <h2 className="mb-2 font-bold text-[22px] text-[#3e5055] heading-font opacity-50 group-hover:opacity-100 transition-opacity duration-300">Nesciunt Mete</h2>
                                <p className="text-[#3d4348] opacity-50 group-hover:opacity-80 transition-opacity">Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                                <button className="mt-[10px] text-[#388DA8] group-hover:text-[#77b6ca] text-[14px] flex items-center gap-2 transition-colors">Learn More <ArrowRightIcon className="h-[18px] inline-block" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="group min-h-[174px] lg:h-[222px] w-[98%] sm:w-[694.4px] lg:w-[442.4px] xl:w-[532.4px] bg-white shadow hover:shadow-lg rounded-[10px] justify-self-center lg:justify-self-start transition-all duration-300 cursor-pointer">
                        <div className="p-[30px] flex justify-between items-start gap-[25px]">
                            <div className="border border-[#fd7e14] bg-[#fd7e14] bg-opacity-10 rounded-[10px]">
                                <WifiIcon className="h-[72px] p-[15px] text-[#fd7e14]" />
                            </div>
                            <div>
                                <h2 className="mb-2 font-bold text-[22px] text-[#3e5055] heading-font opacity-50 group-hover:opacity-100 transition-opacity duration-300">Eosle Commodi</h2>
                                <p className="text-[#3d4348] opacity-50 group-hover:opacity-80 transition-opacity">Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                <button className="mt-[10px] text-[#388DA8] group-hover:text-[#77b6ca] text-[14px] flex items-center gap-2 transition-colors">Learn More <ArrowRightIcon className="h-[18px] inline-block" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="group min-h-[174px] lg:h-[222px] w-[98%] sm:w-[694.4px] lg:w-[442.4px] xl:w-[532.4px] bg-white shadow hover:shadow-lg rounded-[10px] justify-self-center lg:justify-self-end transition-all duration-300 cursor-pointer">
                        <div className="p-[30px] flex justify-between items-start gap-[25px]">
                            <div className="border border-[#20c997] bg-[#20c997] bg-opacity-10 rounded-[10px]">
                                <ComputerDesktopIcon className="h-[72px] p-[15px] text-[#20c997]" />
                            </div>
                            <div>
                                <h2 className="mb-2 font-bold text-[22px] text-[#3e5055] heading-font opacity-50 group-hover:opacity-100 transition-opacity duration-300">Ledo Markt</h2>
                                <p className="text-[#3d4348] opacity-50 group-hover:opacity-80 transition-opacity">Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                <button className="mt-[10px] text-[#388DA8] group-hover:text-[#77b6ca] text-[14px] flex items-center gap-2 transition-colors">Learn More <ArrowRightIcon className="h-[18px] inline-block" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="group min-h-[174px] lg:h-[222px] w-[98%] sm:w-[694.4px] lg:w-[442.4px] xl:w-[532.4px] bg-white shadow hover:shadow-lg rounded-[10px] justify-self-center lg:justify-self-start transition-all duration-300 cursor-pointer">
                        <div className="p-[30px] flex justify-between items-start gap-[25px]">
                            <div className="border border-[#df1529] bg-[#df1529] bg-opacity-10 rounded-[10px]">
                                <HashtagIcon className="h-[72px] p-[15px] text-[#df1529]" />
                            </div>
                            <div>
                                <h2 className="mb-2 font-bold text-[22px] text-[#3e5055] heading-font opacity-50 group-hover:opacity-100 transition-opacity duration-300">Asperiores Commodi</h2>
                                <p className="text-[#3d4348] opacity-50 group-hover:opacity-80 transition-opacity">Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                                <button className="mt-[10px] text-[#388DA8] group-hover:text-[#77b6ca] text-[14px] flex items-center gap-2 transition-colors">Learn More <ArrowRightIcon className="h-[18px] inline-block" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="group min-h-[174px] lg:h-[222px] w-[98%] sm:w-[694.4px] lg:w-[442.4px] xl:w-[532.4px] bg-white shadow hover:shadow-lg rounded-[10px] justify-self-center lg:justify-self-end transition-all duration-300 cursor-pointer">
                        <div className="p-[30px] flex justify-between items-start gap-[25px]">
                            <div className="border border-[#6610f2] bg-[#6610f2] bg-opacity-10 rounded-[10px]">
                                <CalendarDaysIcon className="h-[72px] p-[15px] text-[#6610f2]" />
                            </div>
                            <div>
                                <h2 className="mb-2 font-bold text-[22px] text-[#3e5055] heading-font opacity-50 group-hover:opacity-100 transition-opacity duration-300">Velit Doloremque.</h2>
                                <p className="text-[#3d4348] opacity-50 group-hover:opacity-80 transition-opacity">Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                                <button className="mt-[10px] text-[#388DA8] group-hover:text-[#77b6ca] text-[14px] flex items-center gap-2 transition-colors">Learn More <ArrowRightIcon className="h-[18px] inline-block" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="group h-min-h-[174px] lg:h-[222px] w-[98%] sm:w-[694.4px] lg:w-[442.4px] xl:w-[532.4px] bg-white shadow hover:shadow-lg rounded-[10px] justify-self-center lg:justify-self-start transition-all duration-300 cursor-pointer">
                        <div className="p-[30px] flex justify-between items-start gap-[25px]">
                            <div className="border border-[#f3268c] bg-[#f3268c] bg-opacity-10 rounded-[10px]">
                                <ChatBubbleBottomCenterTextIcon className="h-[72px] p-[15px] text-[#f3268c]" />
                            </div>
                            <div>
                                <h2 className="mb-2 font-bold text-[22px] text-[#3e5055] heading-font opacity-50 group-hover:opacity-100 transition-opacity duration-300">Dolori Architecto</h2>
                                <p className="text-[#3d4348] opacity-50 group-hover:opacity-80 transition-opacity">Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                                <button className="mt-[10px] text-[#388DA8] group-hover:text-[#77b6ca] text-[14px] flex items-center gap-2 transition-colors">Learn More <ArrowRightIcon className="h-[18px] inline-block" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}