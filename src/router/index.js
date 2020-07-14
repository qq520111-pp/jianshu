import Header from "../header/index";
import Login from "../login/index.js";

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
    }
]

export default route