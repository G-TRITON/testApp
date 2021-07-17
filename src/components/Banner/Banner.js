import bannerImg from '../../assets/tajmahal.jpg';
import patterLeft from '../../assets/shape-left.png';
import patterRight from '../../assets/shape-right.png';

import './banner.css'

function Banner() {
    return (
        <section id="home" className="banner">
            <div className="bannerContent">
                <div className="bannerIntro" >
                    <h1 className="bannerIntroItem">Offers you best tours</h1>
                    <p className="bannerIntroItem">Chek out our website for more information and book a trip</p>
                    <button className="btn btnFullSecondary bannerIntroItem">Explore</button>
                </div>
                <div className="bannerThumb">
                    <img src={bannerImg} alt="" className="bannerImage" />
                    <div className="bannerBackground">
                        <img className="shape" src={patterLeft} alt="Patter left" />
                        <img className="shape" src={patterRight} alt="pattern right" />
                    </div>
                </div>
                

            </div>
        </section>
    );
}

export default Banner;
