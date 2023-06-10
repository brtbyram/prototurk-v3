import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Discover from "../pages/discover";
import Articles from "../pages/articles";
import LectureRequests from "../pages/lecture-requests";
import Category from "../pages/category";
import WebLayout from "../layouts/web";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <WebLayout />,
        children: [
            {
                index: true , 
                element: <Home />
            },
            {
                path: '/kesfet',
                element: <Discover />
            },
            {
                path: '/makaleler',
                element: <Articles />
            },
            {
                path: '/ders-istekleri',
                element: <LectureRequests />
            },
            {
                path: '/:categorySlug',
                element: <Category />
            }
        ]
    }
])

export default routes