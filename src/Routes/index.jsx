import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path : 'about',
                element:<About></About>,
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
         
    },
    {
        path:'/login',
        element:<Login></Login>,
    },
    {
        path:'/register',
        element:<Register></Register>
    }
]);

export default routes;