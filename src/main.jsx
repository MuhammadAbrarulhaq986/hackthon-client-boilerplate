import { createRoot } from "react-dom/client";
import "./index.css"; // assuming you have a custom CSS file with Tailwind CSS classes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/profile";
import ApplyLoan from "./pages/applyloan.jsx";
import LoanCategory from "./pages/loancategory.jsx";
//import SingleBlog from "./pages/applyloan.jsx";
//import CreateBlog from "./pages/addBlog.jsx";
// import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
// import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "applyloan",
        element: <ApplyLoan />,
      },
      {
        path: "loancategory",
        element: <LoanCategory />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
