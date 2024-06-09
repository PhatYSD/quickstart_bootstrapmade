import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Question() {
    const questionRef = useRef(null);
    const [show, setShow] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    });

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    questionRef.current.classList.remove("opacity-0");
                    questionRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(questionRef.current);

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={questionRef} className="w-full bg-white opacity-0 transition-opacity duration-1000">
            <div className="max-w-[1320px] w-full mx-auto py-[60px]">
                <div className="px-3 pb-3">
                    <h2 className="text-[32px] text-center pb-5 mb-5 heading-font font-bold text-[#3e5055] relative after:content-[''] after:h-[3px] after:w-[50px] after:bg-[#388da8] after:rounded-full after:absolute after:bottom-0 after:right-0 after:m-auto after:left-0">Frequently Asked Questions</h2>
                </div>
                <div className="w-full sm:w-[516px] md:w-[696px] lg:w-[776px] xl:w-[926px] 2xl:[1076px] mx-auto px-3 flex flex-col items-center gap-4">
                    <div className="w-full">
                        <div onClick={() => setShow(prev => ({ 1: !prev[1] }))} className={`group p-[20px] border-question ${show[1] ? "bg-pricing" : "bg-white"} rounded-[5px] border-black cursor-pointer transition duration-300`}>
                            <div className="flex justify-between items-center">
                                <h3 className={`heading-font font-semibold ${show[1] ? "text-[#388da8]" : "text-[#3e5055] group-hover:text-[#388da8]"} leading-6 transition-colors duration-300`}>Non consectetur a erat nam at lectus urna duis?</h3>
                                <ChevronRightIcon className={`h-6 w-6 text-[#3e5055] ${show[1] ? "rotate-90" : "rotate-0"} transition-transform duration-300`} />
                            </div>
                            <div className={`${show[1] ? "pt-[10px]" : "pt-0"} grid ${show[1] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ${show[1] ? "" : "in"}visible opacity-${show[1] ? 100 : 0} transition-all duration-300`}>
                                <p className="overflow-hidden">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div onClick={() => setShow(prev => ({ 2: !prev[2] }))} className={`group p-[20px] border-question ${show[2] ? "bg-pricing" : "bg-white"} rounded-[5px] border-black cursor-pointer transition duration-300`}>
                            <div className="flex justify-between items-center">
                                <h3 className={`heading-font font-semibold ${show[2] ? "text-[#388da8]" : "text-[#3e5055] group-hover:text-[#388da8]"} leading-6 transition-colors duration-300`}>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                                <ChevronRightIcon className={`h-6 w-6 text-[#3e5055] ${show[2] ? "rotate-90" : "rotate-0"} transition-transform duration-300`} />
                            </div>
                            <div className={`${show[2] ? "pt-[10px]" : "pt-0"} grid ${show[2] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ${show[2] ? "" : "in"}visible opacity-${show[2] ? 100 : 0} transition-all duration-300`}>
                                <p className="overflow-hidden">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div onClick={() => setShow(prev => ({ 3: !prev[3] }))} className={`group p-[20px] border-question ${show[3] ? "bg-pricing" : "bg-white"} rounded-[5px] border-black cursor-pointer transition duration-300`}>
                            <div className="flex justify-between items-center">
                                <h3 className={`heading-font font-semibold ${show[3] ? "text-[#388da8]" : "text-[#3e5055] group-hover:text-[#388da8]"} leading-6 transition-colors duration-300`}>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                                <ChevronRightIcon className={`h-6 w-6 text-[#3e5055] ${show[3] ? "rotate-90" : "rotate-0"} transition-transform duration-300`} />
                            </div>
                            <div className={`${show[3] ? "pt-[10px]" : "pt-0"} grid ${show[3] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ${show[3] ? "" : "in"}visible opacity-${show[3] ? 100 : 0} transition-all duration-300`}>
                                <p className="overflow-hidden">Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div onClick={() => setShow(prev => ({ 4: !prev[4] }))} className={`group p-[20px] border-question ${show[4] ? "bg-pricing" : "bg-white"} rounded-[5px] border-black cursor-pointer transition duration-300`}>
                            <div className="flex justify-between items-center">
                                <h3 className={`heading-font font-semibold ${show[4] ? "text-[#388da8]" : "text-[#3e5055] group-hover:text-[#388da8]"} leading-6 transition-colors duration-300`}>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h3>
                                <ChevronRightIcon className={`h-6 w-6 text-[#3e5055] ${show[4] ? "rotate-90" : "rotate-0"} transition-transform duration-300`} />
                            </div>
                            <div className={`${show[4] ? "pt-[10px]" : "pt-0"} grid ${show[4] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ${show[4] ? "" : "in"}visible opacity-${show[4] ? 100 : 0} transition-all duration-300`}>
                                <p className="overflow-hidden">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div onClick={() => setShow(prev => ({ 5: !prev[5] }))} className={`group p-[20px] border-question ${show[5] ? "bg-pricing" : "bg-white"} rounded-[5px] border-black cursor-pointer transition duration-300`}>
                            <div className="flex justify-between items-center">
                                <h3 className={`heading-font font-semibold ${show[5] ? "text-[#388da8]" : "text-[#3e5055] group-hover:text-[#388da8]"} leading-6 transition-colors duration-300`}>Tempus quam pellentesque nec nam aliquam sem et tortor?</h3>
                                <ChevronRightIcon className={`h-6 w-6 text-[#3e5055] ${show[5] ? "rotate-90" : "rotate-0"} transition-transform duration-300`} />
                            </div>
                            <div className={`${show[5] ? "pt-[10px]" : "pt-0"} grid ${show[5] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ${show[5] ? "" : "in"}visible opacity-${show[5] ? 100 : 0} transition-all duration-300`}>
                                <p className="overflow-hidden">Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div onClick={() => setShow(prev => ({ 6: !prev[6] }))} className={`group p-[20px] border-question ${show[6] ? "bg-pricing" : "bg-white"} rounded-[5px] border-black cursor-pointer transition duration-300`}>
                            <div className="flex justify-between items-center">
                                <h3 className={`heading-font font-semibold ${show[6] ? "text-[#388da8]" : "text-[#3e5055] group-hover:text-[#388da8]"} leading-6 transition-colors duration-300`}>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                                <ChevronRightIcon className={`h-6 w-6 text-[#3e5055] ${show[6] ? "rotate-90" : "rotate-0"} transition-transform duration-300`} />
                            </div>
                            <div className={`${show[6] ? "pt-[10px]" : "pt-0"} grid ${show[6] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} ${show[6] ? "" : "in"}visible opacity-${show[6] ? 100 : 0} transition-all duration-300`}>
                                <p className="overflow-hidden">Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}