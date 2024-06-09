export default function AboutSupport() {
    const clientURL1 = new URL("/images/clients/client-1.png", import.meta.url);
    const clientURL2 = new URL("/images/clients/client-2.png", import.meta.url);
    const clientURL3 = new URL("/images/clients/client-3.png", import.meta.url);
    const clientURL4 = new URL("/images/clients/client-4.png", import.meta.url);
    const clientURL5 = new URL("/images/clients/client-5.png", import.meta.url);
    const clientURL6 = new URL("/images/clients/client-6.png", import.meta.url);

    return (
        <article className="max-w-[1320px] w-full mx-auto py-5 lg:pt-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
            <div className="mt-6">
                <img src={clientURL1.href} className="py-5 px-[40px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-300" alt="client 1" />
            </div>
            <div className="mt-6">
                <img src={clientURL2.href} className="py-5 px-[40px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-300" alt="client 1" />
            </div>
            <div className="mt-6">
                <img src={clientURL3.href} className="py-5 px-[40px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-300" alt="client 1" />
            </div>
            <div className="mt-6">
                <img src={clientURL4.href} className="py-5 px-[40px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-300" alt="client 1" />
            </div>
            <div className="mt-6">
                <img src={clientURL5.href} className="py-5 px-[40px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-300" alt="client 1" />
            </div>
            <div className="mt-6">
                <img src={clientURL6.href} className="py-5 px-[40px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition duration-300" alt="client 1" />
            </div>
        </article>
    );
}