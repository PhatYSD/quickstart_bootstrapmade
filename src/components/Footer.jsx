import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full min-h-[462px] bg-footer pb-[50px]">
            <div className="max-w-[1320px] h-full w-full mx-auto flex flex-col justify-between items-center">
                <div className="w-full pt-[50px] py-3 px-4 flex flex-wrap justify-between flex-col md:flex-row items-start heading-font gap-4 lg:gap-0">
                    <div className="flex-grow">
                        <Link to="/" className="text-[24px] font-bold text-[#3e5055]">QuickStart</Link>
                        <p className="text-[14px] text-footer-p mt-6">A108 Adam Street</p>
                        <p className="text-[14px] text-footer-p mt-2">New York, NY 535022</p>
                        <p className="text-[14px] text-footer-p mt-4 mb-2"><strong className="text-black">Phone: </strong>+1 5589 55488 55</p>
                        <p className="text-[14px] text-footer-p mb-4"><strong className="text-black">Email: </strong>info@example.com</p>
                        <div className="flex justify-start items-center mt-2 gap-[10px]">
                            <div className="w-10 h-10 border-footer-social rounded-full"></div>
                            <div className="w-10 h-10 border-footer-social rounded-full"></div>
                            <div className="w-10 h-10 border-footer-social rounded-full"></div>
                            <div className="w-10 h-10 border-footer-social rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-[196px] flex flex-col justify-start items-start gap-[10px]">
                        <h3 className="text-base font-bold text-[#3e5055]">Useful Links</h3>
                        <Link to={"/"} className="text-[14px] text-footer-p">Home</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">About us</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">Services</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">Terms of service</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">Privacy policy</Link>
                    </div>
                    <div className="flex-shrink-0 w-[196px] flex flex-col justify-start items-start gap-[10px]">
                        <h3 className="text-base font-bold text-[#3e5055]">Our Services</h3>
                        <Link to={"/"} className="text-[14px] text-footer-p">Web Design</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">Web Development</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">Product Management</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">Marketing</Link>
                        <Link to={"/"} className="text-[14px] text-footer-p">Graphic Design</Link>
                    </div>
                    <div className="flex-shrink-0 self-start w-full lg:w-auto h-40 lg:h-0 lg:mt-0">
                        <h3 className="text-base font-bold text-[#3e5055] mb-[20px]">Our Newsletter</h3>
                        <p className="text-[14px] text-[#3d4348] default-font">Subscribe to our newsletter and receive the latest news about our<br className="hidden lg:block" /> products and services!</p>
                        <div className="w-full h-auto relative z-[1] mt-[20px]">
                            <input className="w-full h-auto absolute top-0 left-0 py-[10px] ps-[18px] pe-[118px] border-email-sub rounded-full" type="email" />
                            <input className="w-[110px] h-auto top-0 absolute right-0 py-[10px] bg-[#388da8] hover:bg-[#77b6ca] text-white transition-colors cursor-pointer rounded-full" type="button" value="Subscribe" />
                        </div>
                    </div>
                </div>
                <div className="w-full footer-line mt-6 py-[25px] px-[12px] text-[#3d4348] flex flex-col justify-center items-center">
                    <h6 className="text-[14px]">© Copyright <strong className="px-1">QuickStart</strong>All Rights Reserved</h6>
                    <p className="text-[13px] mt-[6px]">Designed by <Link className="text-[#388da8]" to="https://bootstrapmade.com/" target="_black">BootstrapMade</Link></p>
                </div>
            </div>
        </footer>
    );
}