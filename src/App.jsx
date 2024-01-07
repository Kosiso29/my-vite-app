/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signin";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Layout><Dashboard text="DASHBOARD" /></Layout>,
  },
  {
    path: "/avatars",
    element: <Layout><Dashboard text="AVATARS" /></Layout>,
  },
  {
    path: "/torches",
    element: <Layout><Dashboard text="TORCHES" /></Layout>,
  },
  {
    path: "/crafting",
    element: <Layout><Dashboard text="CRAFTING" /></Layout>,
  },
  {
    path: "/forges",
    element: <Layout><Dashboard text="FORGES" /></Layout>,
  },
  {
    path: "/tournaments",
    element: <Layout><Dashboard text="TOURNAMENTS" /></Layout>,
  },
]);

function App() {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
