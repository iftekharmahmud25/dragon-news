import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Layout/Pages/Home/Home";
import About from "../Layout/Pages/About/About";



const router  = createBrowserRouter([

      {
         path : "/",
         element : <MainLayout></MainLayout>,
         children : [
             {
                 path : "/",
                 element : <Home></Home>
                
                },
                {
                     path : "/about",
                     element : <About></About>
                }
         ]
      }
])


export default router;