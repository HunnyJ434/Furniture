import '../App.css';
import delivery from "../Images/free-delivery.svg"
import support from "../Images/support247.svg"
import authentic from "../Images/authentic.svg"

export default function Services(){
    return (
        <div className="services">
            <div className="services--item">
                <img className="service--img" src={delivery} alt=""/>
                <div className="service--content">
                    <h2 className="content--heading">Free Delivery</h2>
                    <p className="content--text">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="services--item">
                <img className="service--img" src={support} alt=""/>
                <div className="service--content">
                    <h2 className="content--heading">Support 24/7</h2>
                    <p className="content--text">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="services--item">
                <img className="service--img" src={authentic} alt=""/>
                <div className="service--content">
                    <h2 className="content--heading">100% Authentic</h2>
                    <p className="content--text">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}