import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "../App";
import NavBar from "../Components/Navbar";
import Login from "../View/Login";
import Home from "../View/Home";
import Write from "../View/Write"

import {
  createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/writeblog",
            element: <Write/>
        }
    ]
  },
  {
    path:"/login",
    element: <Login/>
  }
]);


export default router;