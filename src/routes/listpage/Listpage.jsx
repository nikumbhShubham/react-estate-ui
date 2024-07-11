import "./listpage.scss"
import {listData} from "../../lib/dummydata.js"
import Filter from "../../components/filter/Filter.jsx"
import Card from "../../components/card/Card.jsx"
import Map from "../../components/map/Map.jsx"
export default function Listpage() {

    const data=listData

    return (
        <div className="listpage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {
                        data.map((item)=>(
                            <Card key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data}/>
            </div>

        </div>
    )
}