import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ id, item }) {
    return (
        <div className="card">
            <Link to={`/${item.id}`} className="imageConatiner">

                <img src={item.img} alt="image" />
            </Link>
            <div className="textContainer">
                <h3 className="title"><Link to={`/${item.id}`} >{item.title}</Link></h3>

                <p className="address">
                    <img src="/pin.png" alt="" />
                    <span>{item.address}</span>
                </p>
                <p className="price">
                    ${item.price}
                </p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="" />
                            <span>{item.bedroom} bedrooms</span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt="" />
                            <span>{item.bathroom} bathrooms</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>


        </div>

    )
}