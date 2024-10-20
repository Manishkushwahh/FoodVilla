import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
// import InstaMart from "./components/InstaMart";

// Chunking
// Code spliting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading 
// Dynamic Import

const InstaMart = lazy(()=> import("./components/InstaMart"));
//Upon on Demand Loading -> Upon render -> Suspend Loading

const AppLayout = () => {
    const [user, setUser] = useState({
       user: {
            name: "Dummy Name",
            email: "Dummymail@gmail.com"
        },
     })
     
    return(
    <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
                children:[
                {
                    path: "profile",
                    element: <Profile/>,
                }
                ]
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "/restraunts/:id",
                element: <RestrauntMenu/>,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={Shimmer}>
                    <InstaMart/>
                </Suspense>,
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);
