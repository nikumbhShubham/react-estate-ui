import Card from "../../components/card/Card"
import "./profilePage.scss"
import { singlePostData, userData, listData } from "../../lib/dummydata.js"
import Chat from "../../components/chat/Chat.jsx";
import apiRequest from "../../lib/apiRequest.js";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const data = listData;
    const navigate =useNavigate();

    const handleClick=async()=>{
        try { 
        const res= await apiRequest.post("/auth/logout")
        navigate("/")
        localStorage.removeItem("user")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="profilePage">
            <div className="userInfo">
                <div className="heading">
                    <span>User Information</span>
                    <button>Update Profile</button>
                </div>
                <div className="userData">

                    <div className="avatar">
                        <span>Avatar:  </span>
                        <img src={userData.img} alt="" />
                    </div>
                    <div className="username">
                        <span className="title">Username:  </span>
                        <span>{userData.name}</span>
                    </div>
                    <div className="email">
                        <span className="title">E-mail:  </span>
                        <span>mymail@gmail.com</span>
                    </div>
                    <button className="logout-btn" onClick={handleClick}>Logout</button>
                </div>
                <div className="list">
                    <div className="lTitle">
                        <span>My List</span>
                        <button>Add New Post</button>
                    </div>
                    <div className="wrapper">
                        {
                            data.map((item) => (
                                <Card id={item.id} item={item} />
                            ))
                        }
                    </div>

                </div>




            </div>
            <div className="messages">
                <Chat/>
            </div>
        </div>
    )
}