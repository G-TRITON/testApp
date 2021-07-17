import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Services from "../components/Services/Services";
import FeatureGroup from "../components/featureGroup/featureGroup";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

function Home () {
    return(
    <>
    <Banner />
    <About />
    <Features />
    <FeatureGroup />
    <Services />
    <Testimonial />
    <Footer />
    </>
    );
}

export default Home;