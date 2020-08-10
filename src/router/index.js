import Header from "../header/index";
import Login from "../login/index.js";
import MainContent from "../main/index.js";
import Footer from "../main/Footer/index.js";
import CreateArticle from "../createArticle/index.js";

const route = [
    {
        component: Header,
        path: '/',
        exact: true
    },
    {
        component: MainContent,
        path: '/',
        exact: true
    },
    {
        component: Footer,
        path: '/',
        exact: true
    },
    {
        component: CreateArticle,
        path: '/createArticle',
        exact: true
    },
    {
        component: Login,
        path: '/login/:sign_in',
        exact: true
    }

]

export default route