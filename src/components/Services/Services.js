import One from '../../assets/blog/1.jpg';
import Shape from '../../assets/shape-pattern2.png';
import Subscription from '../../assets/feature/subscription.svg';
import Support from '../../assets/feature/support.svg';
import './services.css';


function Services () {
    return (
        <section id="Services">
            <div className="servicesContentBox">
                <div className="serviceImgContainer">
                    <img src={One} alt="" className="serviceImg" />
                    <img src={Shape} alt="" className="servicesPattern" />
                </div>

                <div className="features">
                    <div className="featureHeadings">
                        <p>Our Services</p>
                        <h2>Business Goals Achieved with Design</h2>
                    </div>

                    <div className="featureContainerOne">
                        <img src={Subscription} className="featureIcon" alt="" />
                        <div className="featureContainerTwo">
                            <h3>Feature</h3>
                            <p className="feature">
                                Get your blood tests delivered at home collect a sample from the your blood tests
                                Get your blood tests delivered at home collect a sample from the your blood tests
                            </p>
                        </div>
                    </div>

                    <div className="featureContainerOne">
                        <img src={Support} className="featureIcon" alt="" />
                        <div className="featureContainerTwo">
                            <h3>Feature</h3>
                            <p className="feature">
                                Get your blood tests delivered at home collect a sample from the your blood tests
                                Get your blood tests delivered at home collect a sample from the your blood tests
                            </p>
                        </div>
                    </div>
                    <button className="btn btnFullSecondary bannerIntroItem servicebtn">Get Started</button>
                </div>
            </div>
        </section>
    );
}

export default Services;