import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/coverage',
        element:<Coverage></Coverage>,
        loader:()=>fetch ('/serviceCenter.json').then(res=>res.json())
      }

    ]
  },
]);