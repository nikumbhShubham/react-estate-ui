

import Homepage from "./routes/homePage/Homepage"
import Singlepage from "./routes/Singlepage/Singlepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Listpage from "./routes/listpage/Listpage"
import Layout from "./layout/Layout"
import Login from "./routes/login/Login"
import ProfilePage from "./routes/profilePage/ProfilePage"
import Register from "./routes/register/Register"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/list",
          element: <Listpage />
        },
        {
          path: "/:id",
          element: <Singlepage />
        }, {
          path: "/profile",
          element: <ProfilePage />
        },
       
      ]
    },

    {
      path: "/login",
      element: <Login />
    },
    {
      path:"/register",
      element:<Register/>
    }



  ])

  return (
    // <div className="layout">
    //   <div className="navbar">
    //   <Navbar/>
    //   </div>
    //   <div className="content">
    //   <Homepage/> 
    //   </div>
    // </div>

    <RouterProvider router={router} />



  )
}

export default App