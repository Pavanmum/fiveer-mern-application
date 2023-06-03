import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import Graphics from "./pages/load/Graphics";
import Writing from "./pages/load/Writing";
import Lifestyle from "./pages/load/Lifestyle";
import Digital from "./pages/load/Digital";
import Music from "./pages/load/Music";
import Programming from "./pages/load/Programming";
import Business  from "./pages/load/Business";
import Ai  from "./pages/load/Ai";
import Animation from "./pages/load/Animation"
import Contact from "./pages/load/Contact"


function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
    
        {
          path: "/graphics",
          element: <Graphics />,
        },
        {
          path: "/writing",
          element: <Writing />,
        },{
          path: "/Ai",
          element: <Ai />,
        },{
          path: "/Digital",
          element: <Digital />,
        },{
          path: "/Music",
          element: <Music />,
        }
        ,{
          path: "/Programming",
          element: <Programming />,
        },{
          path: "/Business",
          element: <Business />,
        },{
          path: "/Lifestyle",
          element: <Lifestyle />,
        },{
          path: "/Animation",
          element: <Animation />,
        },{
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
