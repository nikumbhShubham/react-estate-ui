import Slider from "../../components/slider/Slider"
import Map from "../../components/map/Map"
import "./singlepage.scss"
import { singlePostData, userData } from "../../lib/dummydata.js"

export default function Singlepage() {

    return (
        <div className="singlepage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address"><img src="/pin.png" alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">
                                    <span>${singlePostData.price}</span>
                                </div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt="" />
                                <span>{userData.name}</span>

                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                <p>Pets are allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>Must have 3x the rent in total household income.  </p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="" />
                            <span>80sqft</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>3 bed</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="" />
                            <span>1 bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="ListHorizontal">
                        <div className="place">
                            <img src="/school.png" alt="" />
                            <div className="placeText">
                                <span> School</span>
                                <p> 1.5 miles</p>
                            </div>
                        </div>
                        <div className="place">
                            <img src="/bus.png" alt="" />
                            <div className="placeText">
                                <span> Bus Stop</span>
                                <p> 100m away</p>
                            </div>
                        </div>
                        <div className="place">
                            <img src="/restaurant.png" alt="" />
                            <div className="placeText">
                                <span> Restaurant</span>
                                <p> 2 miles</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]}/>
                    </div>
                    <div className="buttons">
                            <button>
                                <img src="/chat.png" alt="" />
                                Send a Message
                            </button>
                            <button>
                                <img src="/save.png" alt="" />
                                Save the place
                            </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}