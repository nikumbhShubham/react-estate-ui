import "./login.scss"
import apiRequest from "../../lib/apiRequest"
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
export default function Login() {

    const [error,setError]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("")
      setIsLoading(true)
      const formData = new FormData(e.target)
      const username = formData.get("username");
      const password = formData.get("password");
    //   const password = formData.get("password");
      try {
        const res = await apiRequest.post("/auth/login", {
          username, password
        })
        console.log(res.data)
        localStorage.setItem("user",JSON.stringify(res.data))
        navigate("/")
      } catch (error) {
          console.log(error)
          setError(error.response.data.message);
          
      }
      finally{setIsLoading(false)}

    }


    return (
        <div className="loginContainer">

        <div className="login"> 
            <form className="loginForm" onSubmit={handleSubmit} >
            <input type="text" name="username" required placeholder="userName" />
            <input type="password" name="password" required placeholder="password" />
            <button className="btn" disabled={isLoading}>Login</button>
            {error && <span>{error}</span>}
            </form>
        </div>
        </div>
    )
}