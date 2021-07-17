import data from "./testimonialData";
import Icon from "../../assets/testimonial/avatar2.png"

import './testimonial.css';

function Testimonial () {
    const profileIcon = data.map((review) => review.url);
    return (
        <section id="testimonial">
            <div className="cardsContainer">
                {
                    data.map((review, i) => (
                        <div key={i} className="card">
                            <h3 className="cardItem">{review.title}</h3>
                            <p className="cardItem">{review.message}</p>
                            <div className="cardItem userCard">
                                <img alt="" src={Icon} />
                                <div className="userInfo" >
                                    <h4>{review.name}</h4>
                                    <p>{review.id}</p>
                                </div>      
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Testimonial;