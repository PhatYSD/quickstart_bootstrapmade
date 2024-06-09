import { useContext, useEffect, useRef } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";

export default function Contact() {
    const contactRef = useRef(null);
    const context = useContext(HomeContext);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    contactRef.current.classList.remove("opacity-0");
                    contactRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(contactRef.current);
        context.contactRef = contactRef.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={contactRef} className="w-full bg-white opacity-0 transition-opacity duration-1000">
            <div className="py-[60px] max-w-[1320px] sm:w-[540px] md:w-[696px] lg:w-[960px] xl:w-full mx-auto">
                <div className="px-3 pb-[60px]">
                    <h2 className="text-[32px] text-center pb-5 mb-5 heading-font font-bold text-[#3e5055] relative after:content-[''] after:h-[3px] after:w-[50px] after:bg-[#388da8] after:absolute after:bottom-0 after:right-0 after:m-auto after:left-0">Contact</h2>
                    <p className="text-[#3d4348] text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="px-3 w-full flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex-1 flex flex-col justify-normal items-center shadow-4c">
                        <div className="w-14 h-14 rounded-full shadow mt-5">
                            <MapPinIcon className="h-full w-full p-4 text-[#388da8]" />
                        </div>
                        <h3 className="my-[10px] text-[18px] text-[#3e5055] heading-font font-bold">Address</h3>
                        <p className="mb-[30px] text-[14px] text-[#3d4348]">A108 Adam Street, New York, NY 535022</p>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex-1 w-full flex flex-col justify-normal items-center shadow-4c">
                            <div className="w-14 h-14 rounded-full shadow mt-5">
                                <PhoneIcon className="h-full w-full p-4 text-[#388da8]" />
                            </div>
                            <h3 className="my-[10px] text-[18px] text-[#3e5055] heading-font font-bold">Call Us</h3>
                            <p className="mb-[30px] text-[14px] text-[#3d4348]">+1 5589 55488 55</p>
                        </div>
                        <div className="flex-1 w-full flex flex-col justify-normal items-center shadow-4c">
                            <div className="w-14 h-14 rounded-full shadow mt-5">
                                <EnvelopeIcon className="h-full w-full p-4 text-[#388da8]" />
                            </div>
                            <h3 className="my-[10px] text-[18px] text-[#3e5055] heading-font font-bold">Email Us</h3>
                            <p className="mb-[30px] text-[14px] text-[#3d4348]">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="px-3 pt-6 w-full flex flex-col lg:flex-row justify-between items-stretch gap-6">
                    <div className="flex-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96779.56686371699!2d-74.0061377!3d40.7100586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sth!2sth!4v1717858834153!5m2!1sth!2sth" className="w-full h-[400px] lg:h-full" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex-1 shadow-4c">
                        <div className="p-[30px] w-full">
                            <div className="flex justify-between items-center gap-6">
                                <input className="flex-1 py-[10px] px-[15px] text-[14px] text-[#3d4348] shadow-none border focus:border-[#388da8] outline-none" type="text" placeholder="Your Name" />
                                <input className="flex-1 py-[10px] px-[15px] text-[14px] text-[#3d4348] shadow-none border focus:border-[#388da8] outline-none" type="text" placeholder="Your Email" />
                            </div>
                            <input className="flex-1 w-full py-[10px] mt-6 px-[15px] text-[14px] text-[#3d4348] shadow-none border focus:border-[#388da8] outline-none" type="text" placeholder="Subject" />
                            <textarea className="flex-1 w-full py-[10px] mt-6 px-[15px] text-[14px] text-[#3d4348] shadow-none border focus:border-[#388da8] outline-none" rows="6" placeholder="Message"></textarea>
                            <button className="block text-white text-center mt-5 mx-auto bg-[#388da8] py-[10px] px-[30px] rounded-full outline-none border-none">Send Message</button>
                        </div>
                    </div>
                </div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96779.56686371699!2d-74.0061377!3d40.7100586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sth!2sth!4v1717858834153!5m2!1sth!2sth" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </section>
    );
}