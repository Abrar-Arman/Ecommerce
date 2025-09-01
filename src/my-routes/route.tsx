import AppLayout from "@/layout/AppLayout";
import Home from "@/pages/Home";
import {
  createBrowserRouter
} from "react-router-dom";
const router= createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    children:[
      {index:true,element:<Home />}
    ]
  },
])
export default router;