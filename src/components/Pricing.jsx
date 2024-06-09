import { useContext, useEffect, useRef } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";

export default function Pricing() {
    const pricingRef = useRef(null);
    const context = useContext(HomeContext);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    pricingRef.current.classList.remove("opacity-0");
                    pricingRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(pricingRef.current);
        context.pricingRef = pricingRef.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={pricingRef} className="w-full bg-white opacity-0 transition-opacity duration-1000">
            <div className="py-[60px] max-w-[1320px] w-full mx-auto">
                <div className="px-3 pb-[60px]">
                    <h2 className="text-[32px] text-center pb-5 mb-5 heading-font font-bold text-[#3e5055] relative after:content-[''] after:h-[3px] after:w-[50px] after:bg-[#388da8] after:absolute after:bottom-0 after:right-0 after:m-auto after:left-0">Pricing</h2>
                    <p className="text-[#3d4348] text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-3">
                    <div className="bg-pricing rounded-[15px] mx-auto sm:w-[516px] md:w-[696px] lg:w-full">
                        <div className="p-10">
                            <h3 className="heading-font text-[20px] text-[#3e5055] font-semibold mb-[15px]">Free Plan</h3>
                            <p className="text-[14px] text-[#3d4348] mb-4">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                            <div className="flex justify-start gap-1">
                                <h4 className="text-[48px] text-[#388da8] heading-font font-bold leading-none">
                                    <sup className="text-[28px] text-[#388da8] heading-font font-bold self-center leading-none">$</sup>
                                    0
                                </h4>
                                <span className="text-[18px] text-[#3d4348] font-medium opacity-50 self-end">/ month</span>
                            </div>
                            <button className="block w-full py-[10px] mt-[30px] mb-[6px] bg-[#3d4348] hover:bg-[#388da8] rounded-[5px] text-white heading-font font-medium transition-colors duration-300">Start a free trial</button>
                            <p className="text-[14px] text-[#3d4348] mb-4 text-center">No credit card required</p>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Quam adipiscing vitae proin</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Nec feugiat nisl pretium</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Nulla at volutpat diam uteera</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <XMarkIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p-60 leading-5 line-through">Pharetra massa massa ultricies</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <XMarkIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p-60 leading-5 line-through">Massa ultricies mi quis hendrerit</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <XMarkIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p-60 leading-5 line-through">Voluptate id voluptas qui sed aperiam rerum</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <XMarkIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p-60 leading-5 line-through">Iure nihil dolores recusandae odit voluptatibus</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-pricing rounded-[15px] mx-auto sm:w-[516px] md:w-[696px] lg:w-full relative">
                        <p className="py-[5px] px-[15px] text-white text-[14px] font-normal bg-[#388da8] inline-block rounded-[5px] absolute top-[15px] right-[15px]">Popular</p>
                        <div className="p-10">
                            <h3 className="heading-font text-[20px] text-[#3e5055] font-semibold mb-[15px]">Business Plan</h3>
                            <p className="text-[14px] text-[#3d4348] mb-4">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                            <div className="flex justify-start gap-1">
                                <h4 className="text-[48px] text-[#388da8] heading-font font-bold leading-none">
                                    <sup className="text-[28px] text-[#388da8] heading-font font-bold self-center leading-none">$</sup>
                                    29
                                </h4>
                                <span className="text-[18px] text-[#3d4348] font-medium opacity-50 self-end">/ month</span>
                            </div>
                            <button className="block w-full py-[10px] mt-[30px] mb-[6px] bg-[#388da8] rounded-[5px] text-white heading-font font-medium transition-colors duration-300">Start a free trial</button>
                            <p className="text-[14px] text-[#3d4348] mb-4 text-center">No credit card required</p>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Quam adipiscing vitae proin</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Nec feugiat nisl pretium</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Nulla at volutpat diam uteera</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Pharetra massa massa ultricies</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Massa ultricies mi quis hendrerit</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Voluptate id voluptas qui sed aperiam rerum</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <XMarkIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p-60 leading-5 line-through">Iure nihil dolores recusandae odit voluptatibus</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-pricing rounded-[15px] mx-auto sm:w-[516px] md:w-[696px] lg:w-full">
                        <div className="p-10">
                            <h3 className="heading-font text-[20px] text-[#3e5055] font-semibold mb-[15px]">Developer Plan</h3>
                            <p className="text-[14px] text-[#3d4348] mb-4">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                            <div className="flex justify-start gap-1">
                                <h4 className="text-[48px] text-[#388da8] heading-font font-bold leading-none">
                                    <sup className="text-[28px] text-[#388da8] heading-font font-bold self-center leading-none">$</sup>
                                    49
                                </h4>
                                <span className="text-[18px] text-[#3d4348] font-medium opacity-50 self-end">/ month</span>
                            </div>
                            <button className="block w-full py-[10px] mt-[30px] mb-[6px] bg-[#3d4348] hover:bg-[#388da8] rounded-[5px] text-white heading-font font-medium transition-colors duration-300">Start a free trial</button>
                            <p className="text-[14px] text-[#3d4348] mb-4 text-center">No credit card required</p>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Quam adipiscing vitae proin</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Nec feugiat nisl pretium</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Nulla at volutpat diam uteera</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Pharetra massa massa ultricies</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Massa ultricies mi quis hendrerit</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Voluptate id voluptas qui sed aperiam rerum</span>
                            </div>
                            <div className="py-[10px] flex justify-start items-center gap-1">
                                <CheckIcon className="h-6 w-6 p-1 text-green-600" />
                                <span className="text-footer-p leading-5">Iure nihil dolores recusandae odit voluptatibus</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}