import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AuthLayout from "../LayOuts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashBoard from "../LayOuts/DashBoard";
import MyParcels from "../Pages/Dashboard/MyParcels/Myparcels";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'rider',
        element:<PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path:'send-parcel',
        element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
         loader:()=>fetch ('/serviceCenter.json').then(res=>res.json())
      },
      {
        path:'/coverage',
        element:<Coverage></Coverage>,
        loader:()=>fetch ('/serviceCenter.json').then(res=>res.json())
      },
      {
        path:'/about-us',
        element:<AboutUs></AboutUs>
      }

    ]
  },
  {
    path:'/',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'login',
        element:<Login></Login>

      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },

  {
    path:'dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'my-parcels',
        element:<MyParcels></MyParcels>
      }
    ]
  }
]);