import "./login.scss"
export default function Login() {
    return (
        <div className="loginContainer">

        <div className="login"> 
            <form className="loginForm" >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="email" />
            <button className="btn">Login</button>
            </form>
        </div>
        </div>
    )
}