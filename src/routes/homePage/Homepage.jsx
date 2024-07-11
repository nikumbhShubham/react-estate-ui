import Searchbar from "../../components/searchbar/Searchbar"
import "./homepage.scss"

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="textcontainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estaste & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium dolore porro fugit. Possimus iste ex ut cum nostrum in distinctio eaque amet illo, veniam quos vero accusamus dolores explicabo, asperiores maxime.</p>
                    <Searchbar />

                    <div className="boxes">
                        <div className="box1">
                            <h1>69+</h1>
                            <h2>Years of Exprerience</h2>
                        </div>
                        <div className="box2">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box3">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="imagecontainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}