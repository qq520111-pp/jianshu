import Header from "../header/index";
import Login from "../login/index.js";
import MainContent from "../main/index.js";
import Footer from "../main/Footer/index.js";
import CreateArticle from "../createArticle/index.js";
import ArticleDetail from "../articleDetails/index.js";
import HookMy from "../hook/hook.js";

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
    },
    {
        component: ArticleDetail,
        path: '/article/:id',
        exact: true
    },
    {
        component: HookMy,
        path: '/hook',
        exact: true
    }
]

export default route