import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Discover from "../pages/discover";
import Articles from "../pages/articles";
import LectureRequests from "../pages/lecture-requests";
import Category from "../pages/category";
import WebLayout from "../layouts/web";
import QaDashboard from "../pages/qa";
import UnansweredQuestions from "../pages/qa/unanswered-questions";
import UnsolvedQuestions from "../pages/qa/unsolved-questions";
import Categories from "../pages/qa/categories";
import PopularQuestions from "../pages/qa/popular-questions";

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
                path: '/soru-cevap',
                element: <QaDashboard />
            },
            {
                path: '/cevaplanmamis-sorular',
                element: <UnansweredQuestions />
            },
            {
                path: '/cozulmemis-sorular',
                element: <UnsolvedQuestions />
            },
            {
                path: '/kategoriler',
                element: <Categories />
            },
            {
                path: '/popular-sorular',
                element: <PopularQuestions />
            },
            {
                path: '/:categorySlug',
                element: <Category />
            }
        ]
    }
])

export default routes