import Performance from '../../assets/feature/performance.svg';
import Partnership from '../../assets/feature/partnership.svg';
import Subscription from '../../assets/feature/subscription.svg';
import Support from '../../assets/feature/support.svg';

function FeatureGroup () {
    return (
        <div className="aboutFeaturesBox">
            <div className="aboutFeatureContainer">
                <img src={Performance} alt="" />
                <h3>Feature</h3>
                <p className="aboutFeatures">
                    Get your blood tests delivered at home collect a sample from the your blood tests
                    Get your blood tests delivered at home collect a sample from the your blood tests
                </p>
            </div>

            <div className="aboutFeatureContainer">
                <img src={Partnership} alt="" />
                <h3>Feature</h3>
                <p className="aboutFeatures">
                    Get your blood tests delivered at home collect a sample from the your blood tests
                    Get your blood tests delivered at home collect a sample from the your blood tests
                </p>
            </div>

            <div className="aboutFeatureContainer">
                <img src={Subscription} alt="" />
                <h3>Feature</h3>
                <p className="aboutFeatures">
                    Get your blood tests delivered at home collect a sample from the your blood tests
                    Get your blood tests delivered at home collect a sample from the your blood tests
                </p>
            </div>

            <div className="aboutFeatureContainer">
                <img src={Support} alt="" />
                <h3>Feature</h3>
                <p className="aboutFeatures">
                    Get your blood tests delivered at home collect a sample from the your blood tests
                    Get your blood tests delivered at home collect a sample from the your blood tests
                </p>
            </div>

        </div>
    );
}


export default FeatureGroup;