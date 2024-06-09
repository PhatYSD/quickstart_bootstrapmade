import About from "../components/About";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import FeatureSub1 from "../components/FeatureSub1";
import FeatureSub2 from "../components/FeatureSub2";
import Header from "../components/Header";
import HeaderService from "../components/HeaderService";
import Pricing from "../components/Pricing";
import Question from "../components/Question";
import Service from "../components/Service";
import ServiceSub from "../components/ServiceSub";
import Testimonial from "../components/Testimonial";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
    return (
        <HomeLayout>
            <Header />
            <HeaderService />
            <About />
            <Feature />
            <FeatureSub1 />
            <FeatureSub2 />
            <Service />
            <ServiceSub />
            <Pricing />
            <Question />
            <Testimonial />
            <Contact />
        </HomeLayout>
    );
}