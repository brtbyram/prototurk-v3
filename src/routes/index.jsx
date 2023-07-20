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
import Question from "../pages/qa/question";
import Layout from "../layouts";
import ArticleDetail from "../pages/articles/detail";
import User from "../pages/user";
import AuthLayout from "../layouts/auth/index";
import EditProfile from '../pages/profile/edit-profile/index'
import Followers from '../pages/profile/followers/index'
import Following from '../pages/profile/following/index'
import Questions from '../pages/profile/questions/index'
import Answers from '../pages/profile/answers/index'
import Notifications from '../pages/profile/notifications/index'
import Profile from "../pages/profile/index";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <WebLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/uye/:slug',
                element: <User />
            },
            {
                path: '/profil',
                element: <AuthLayout><Profile /></AuthLayout>,
                children: [
                    {
                        index: true,
                        element: <EditProfile />
                    },
                    {
                        path: 'takipciler',
                        element: <Followers />
                    },
                    {
                        path: 'takip-ettiklerin',
                        element: <Following />
                    },
                    {
                        path: 'sorular',
                        element: <Questions />
                    },
                    {
                        path: 'cevaplar',
                        element: <Answers />
                    },
                    {
                        path: 'bildirimler',
                        element: <Notifications />
                    }
                ]
            },
            {
                path: '/kesfet',
                element: <Discover />
            },
            {
                path: '/makaleler',
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <Articles />
                    },
                    {
                        path: ':slug',
                        element: <ArticleDetail />
                    }
                ]
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
            },
            {
                path: '/soru/:slug',
                element: <Question />
            }
        ]
    }
])

export default routes