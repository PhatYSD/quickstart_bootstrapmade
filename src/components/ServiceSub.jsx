import { useRef, useEffect, useContext } from "react";
import { ComputerDesktopIcon, CheckBadgeIcon, SunIcon } from "@heroicons/react/20/solid";

import HomeContext from "../contexts/HomeContext";

export default function ServiceSub() {
    const serviceSubRef = useRef(null);
    const context = useContext(HomeContext);
    const serviceURL = new URL("/images/features-3.jpg", import.meta.url);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    serviceSubRef.current.classList.remove("opacity-0");
                    serviceSubRef.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(serviceSubRef.current);
        context.serviceSubRef = serviceSubRef.current;

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={serviceSubRef} className="opacity-0 transition-opacity duration-1000">
            <div className="max-w-[1320px] w-full mx-auto py-[60px] px-6 flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
                <div className="max-w-[720px] mx-auto self-start px-3">
                    <h3 className="my-[20px] text-[28px] text-[#3e5055] font-bold heading-font">Enim quis est voluptatibus aliquid consequatur</h3>
                    <p className="text-[#3d4348] mb-4">Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 px-3 mt-[30px] gap-x-4 gap-y-6">
                        <div className="flex justify-start lg:justify-between items-start gap-4">
                            <div>
                                <ComputerDesktopIcon className="h-6 w-6 text-[#388DA8]" />
                            </div>
                            <div>
                                <h4 className="text-[18px] text-[#3e5055] heading-font mb-[10px] font-semibold">Lorem Ipsum</h4>
                                <p className="text-[14px] text-[#3d4348]">Voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-between items-start gap-4">
                            <div>
                                <CheckBadgeIcon className="h-6 w-6 text-[#388DA8]" />
                            </div>
                            <div>
                                <h4 className="text-[18px] text-[#3e5055] heading-font mb-[10px] font-semibold">Nemo Enim</h4>
                                <p className="text-[14px] text-[#3d4348]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise</p>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-between items-start gap-4">
                            <div>
                                <SunIcon className="h-6 w-6 text-[#388DA8]" />
                            </div>
                            <div>
                                <h4 className="text-[18px] text-[#3e5055] heading-font mb-[10px] font-semibold">Dine Pad</h4>
                                <p className="text-[14px] text-[#3d4348]">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit</p>
                            </div>
                        </div>
                        <div className="flex justify-start lg:justify-between items-start gap-4">
                            <div>
                                <SunIcon className="h-6 w-6 text-[#388DA8]" />
                            </div>
                            <div>
                                <h4 className="text-[18px] text-[#3e5055] heading-font mb-[10px] font-semibold">Tride clov</h4>
                                <p className="text-[14px] text-[#3d4348]">Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[720px] lg:max-w-[550px] w-full max-h-[400px] h-full mx-6">
                    <img className="w-full h-[400px] object-center object-cover" src={serviceURL.href} alt="features" />
                </div>
            </div>
        </section>
    );
}
