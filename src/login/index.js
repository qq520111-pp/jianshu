import React from 'react';
import axios from "axios";
import './index.css'
import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import img from "../static/login_logo.png";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            pass: '',
            regName:'',
            regPhone:'',
            regPass:''
        }
    }

    login() {
        console.log(this.state.phone);
        console.log(this.state.pass);
    }

    reg() {
        console.log(this.state.regName);
        console.log(this.state.regPhone);
        console.log(this.state.regPass);
    }

    loginPhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    loginPass(e) {
        this.setState({
            pass: e.target.value
        })
    }
    regName(e) {
        this.setState({
            regName: e.target.value
        })
    }
    regPhone(e) {
        this.setState({
            regPhone: e.target.value
        })
    }
    regPass(e) {
        this.setState({
            regPass: e.target.value
        })
    }

    componentWillMount() {
    }

    render() {
        var toggle = false;
        if (this.props.location.pathname === '/sign_in') (toggle = true)
        if (toggle) {
            return (
                <div className='user_login_reg'>
                    <a href='/' className='login_logo'><img src={img}></img></a>
                    <div className='login_reg'>
                        <div className='login_reg_header'>
                            <Link to="/sign_in" className='login_ active'>登录</Link>
                            <span>·</span>
                            <Link to='/sign_up' className='reg_'>注册</Link>
                        </div>
                        <div className='user_input'>
                            <div style={{ borderBottom: '1px solid #c8c8c8' }}>
                                <span className='iconfont icon-yonghu'></span>
                                <input onInput={(e) => { this.loginPhone(e) }} placeholder='手机号或邮箱'></input>
                            </div>
                            <div>
                                <span className='iconfont icon-suo'></span>
                                <input onInput={(e) => { this.loginPass(e) }} placeholder='密码'></input>
                            </div>
                        </div>
                        <div style={{ margin: '10px 0' }}>
                            <input type='checkbox'></input>
                            <span>记住我</span>
                            <a href='javascript:;' style={{ float: 'right' }}>登录遇见问题?</a>
                        </div>
                        <div className='login_btn' onClick={this.login.bind(this)}>登录</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='user_login_reg'>
                    <a href='/' className='login_logo'><img src={img}></img></a>
                    <div className='login_reg'>
                        <div className='login_reg_header'>
                            <Link to="/sign_in" className='login_ '>登录</Link>
                            <span>·</span>
                            <Link to='/sign_up' className='reg_ active'>注册</Link>
                        </div>
                        <div className='user_input'>
                            <div style={{ borderBottom: '1px solid #c8c8c8' }}>
                                <span className='iconfont icon-yonghu'></span>
                                <input onInput={(e) => { this.regName(e) }} placeholder='你的昵称'></input>
                            </div>
                            <div style={{ borderBottom: '1px solid #c8c8c8' }}>
                                <span className='iconfont icon-shoujihao'></span>
                                <input onInput={(e) => { this.regPhone(e) }} placeholder='手机号'></input>
                            </div>
                            <div>
                                <span className='iconfont icon-suo'></span>
                                <input onInput={(e) => { this.regPass(e) }} placeholder='设置密码'></input>
                            </div>
                        </div>
                        <div className='reg_btn' onClick={this.reg.bind(this)}>注册</div>
                    </div>
                </div>
            );
        }
    }
}

export default Login;