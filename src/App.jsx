

import Homepage from "./routes/homePage/Homepage"
import Singlepage from "./routes/Singlepage/Singlepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Listpage from "./routes/listpage/Listpage"
import Layout from "./layout/Layout"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
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
          element: <Singlepage/>
        }
      ]
    },
   

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

    <RouterProvider router={router}/>



  )
}

export default App