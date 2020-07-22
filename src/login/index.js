import React from 'react';
import axios from "axios";
import './index.css'
import { render } from '@testing-library/react';

class Login extends React.Component {

    componentWillMount() {
        React.http({
            method: 'post',
            url: '/register',
            data: { name: '哈哈哈', phone: '13421008644', pass: '123456' }
        }).then(res => {
        })
    }

    render() {
        return (
            <div>
                我是登录,注册组件
            </div>
        );
    }
}

export default Login;