import FeatureGroup from '../featureGroup/featureGroup';
import './about.css';

function About() {
    return (
        <section id="about">
            <div className="aboutHeadings">
                <p className="aboutHeading">Tour and Travels</p>
                <h4 className="aboutHeading">Why chose us?</h4>
            </div>
            <div className="aboutContentBox">
                <div className="aboutContent">
                    <p>For more than 40 years, Village has been providing charter
                     and tour customers with safe, affordable travel. 
                     We started in 1980 as a Wichita company chartering tours to Colorado for ski season. 
                     Today, we plan 220+ group tours each year and operate more than 140 motorcoaches. 
                     Our services have evolved to include entertainer coach leasing, scheduled line routes, 
                     and traditional travel agency services.
                    However you travel – we can help! Our fleet of buses travel the nation, 
                    departing from our offices in Kansas, Oklahoma, Missouri and Arkansas. 
                    We’re more than just coaches though – click below to learn more!</p>
                </div>
                <FeatureGroup />
            </div>
        </section>
    );
}

export default About;