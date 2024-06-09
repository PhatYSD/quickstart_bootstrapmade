import { useContext, useEffect, useRef, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";
import testimonials from "../data/testimonials";

export default function Testimonial() {
    const testimonialRef = useRef(null);
    const context = useContext(HomeContext);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    testimonialRef.current.classList.remove("opacity-0");
                    testimonialRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(testimonialRef.current);
        context.testimonialRef = testimonialRef.current;

        return () => observe.disconnect();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex(prev => prev < 4 ? prev + 1 : 0);
        }, 5000);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section ref={testimonialRef} className="w-full bg-[#F9FBFC] opacity-0 transition-opacity duration-1000">
            <div className="max-w-[1320px] w-full mx-auto py-[60px]">
                <div className="px-3 pb-3">
                    <h2 className="text-[32px] text-center pb-5 mb-5 heading-font font-bold text-[#3e5055] relative after:content-[''] after:h-[3px] after:w-[50px] after:bg-[#388da8] after:rounded-full after:absolute after:bottom-0 after:right-0 after:m-auto after:left-0">Testimonials</h2>
                    <p className="text-[#3d4348] text-center mb-[60px]">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="flex flex-col items-center justify-start">
                    <div className="flex items-center gap-10 px-12">
                        {
                            testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full bg-white p-[32px] shadow ${index === activeIndex ? 'opacity-100 block lg:order-2' : activeIndex - index === 1 ? "hidden lg:block order-1 opacity-40": activeIndex - index === -1 ? "hidden lg:block order-3 opacity-40" : activeIndex - index === -(testimonials.length - 1) ? "hidden lg:block order-1 opacity-40" : activeIndex - index === testimonials.length - 1 ? "hidden lg:block order-3 opacity-40" : "hidden"} transition-all duration-500`}
                                >
                                    <div className={`flex items-center justify-center ${activeIndex === index ? "mb-[18px]" : "mb-[15px]"}`}>
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className={`${activeIndex === index ? "h-6 w-6" : "h-5 w-5"} inline-block ${testimonial.star > i ? "text-yellow-500" : "text-gray-300"}`} />
                                        ))}
                                    </div>
                                    <p className={`text-[#3e5055] ${activeIndex === index ? "pb-3" : "pb-2"} text-center italic`}>{testimonial.description}</p>
                                    <img className="w-[100px] h-[100px] my-4 block mx-auto rounded-full" src={testimonial.avatar.href} alt="avatar" />
                                    <h4 className="text-[18px] mt-[10px] mb-[5px] font-bold heading-font text-center">{testimonial.name}</h4>
                                    <p className="text-center text-footer-p">{testimonial.career}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex gap-2 mt-[30px]">
                        {
                            [...Array(testimonials.length)].map((_, index) => (
                                <div key={index} onClick={() => setActiveIndex(index)} className={`h-3 w-3 rounded-full ${activeIndex === index ? "bg-[#388da8]" : "bg-dot-inactive"} transition-colors cursor-pointer`}></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}