import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import Home from "./pages/Home";
import HomeContext from "./contexts/HomeContext";

import "./global.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        loader: async () => redirect("/")
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <HomeContext.Provider value={{}}>
        <RouterProvider router={router} />
    </HomeContext.Provider>
)