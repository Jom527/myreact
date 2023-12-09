import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginComponent from "./auth/login";
import "./App.css";
import DashboardComponent from "./admin-dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "admin-login",
    element: <LoginComponent />,
  },
  {
    path:'admin-dashboard',
   element:<DashboardComponent/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
