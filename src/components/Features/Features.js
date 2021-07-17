import One from '../../assets/service-thumb.png';
import Shape from '../../assets/shape-pattern1.png';
import Subscription from '../../assets/feature/subscription.svg';
import Support from '../../assets/feature/support.svg';
import './features.css';

function Features () {
    return (
        <section id="features">
        <div className="featureContentBox">
                <div className="imgContainer">
                    <img src={One} alt="" className="featureImg" />
                    <img src={Shape} alt="" className="featurePattern" />
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
            </div>
        </div>
        </section>
    );
}

export default Features;
