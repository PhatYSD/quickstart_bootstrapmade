import { useRef, useEffect } from "react";

export default function FeatureSub1() {
    const featureURL = new URL("/images/features-1.jpg", import.meta.url);
    const featureSub1 = useRef(null);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    featureSub1.current.classList.remove("opacity-0");
                    featureSub1.current.classList.add("opacity-100");
                    observe.disconnect();
                }
            }
        );

        observe.observe(featureSub1.current);

        return () => observe.disconnect();
    }, []);

    return (
        <section ref={featureSub1} className="py-[60px] max-w-[1320px] w-full mx-auto flex justify-between items-center flex-col lg:flex-row opacity-0 transition-opacity duration-1000 gap-8">
            <div className="flex-1 px-3">
                <img src={featureURL.href} alt="features-1.jpg" className="max-w-[636px] w-full rounded-[15px]" />
            </div>
            <div className="flex-1 flex justify-end">
                <div className="p-[30px] w-fit bg-[#EFF6F8] rounded-[10px]">
                    <h3 className="text-[26px] text-[#3e5055] heading-font font-bold mb-[15px] max-w-[466px] leading-8">Corporis temporibus maiores provident</h3>
                    <p className="mb-4 max-w-[466px] opacity-50">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <button className="text-white py-[6px] px-[30px] bg-[#388da8] hover:bg-[#77b6ca] rounded-md max-w-[466px] transition-colors">Learn More</button>
                </div>
            </div>
        </section>
    );
}