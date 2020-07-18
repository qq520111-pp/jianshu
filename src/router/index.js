import Header from "../header/index";
import Login from "../login/index.js";
import MainContent from "../main/index.js";
import Footer from "../main/Footer/index.js";


const route = [
    {
        component: Header,
        path: '/',
        exact: true
    },
    {
        component: Login,
        path: '/sign_in',
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
    }
]

export default route