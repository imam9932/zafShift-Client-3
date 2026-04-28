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
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSucess from "../Pages/Dashboard/Payment/PaymentSucess";
import PaymentCancel from "../Pages/Dashboard/Payment/PaymentCancel";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import ApproveRiders from "../Pages/Dashboard/approveRiders/ApproveRiders";
import Users from "../Pages/Dashboard/Users/Users";
import AdminOnlyRoute from "./AdminOnlyRoute";
import AssignRiders from "../Pages/Dashboard/AssignRiders/AssignRiders";

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
        element:<PrivateRoute><Rider></Rider></PrivateRoute>,
        loader:()=>fetch ('/serviceCenter.json').then(res=>res.json())
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
        path:'my-Parcels',
        element:<MyParcels></MyParcels>
      },
      {
        path:'payment/:parcelId',
        element: <Payment></Payment>
      },
      {
        path:'payment-success',
        element:<PaymentSucess></PaymentSucess>
      },
      {
        path:'payment-cancelled',
        element:<PaymentCancel></PaymentCancel>
      },
      {
        path:'payment-history',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'approve-riders',
        element:<AdminOnlyRoute><ApproveRiders></ApproveRiders></AdminOnlyRoute>
      },
      {
        path:'users',
        element: <AdminOnlyRoute><Users></Users></AdminOnlyRoute>
      },
      {
        path:'assign-riders',
        element: <AdminOnlyRoute><AssignRiders></AssignRiders> </AdminOnlyRoute>
      }
    ]
  }
]);