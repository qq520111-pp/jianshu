import React from 'react';
import './index.css'
import { message } from 'antd';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import img from "../static/login_logo.png";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            pass: '',
            regName: '',
            regPhone: '',
            regPass: ''
        }
    }

    login() {
        if (!this.state.phone) {
            message.error('输入合法的手机号')
            return false
        }
        if (!this.state.pass && (this.state.regPass.length >= 4 || this.state.regPass.length <= 8)) {
            message.error('输入4-8位的密码')
            return false
        }

        React.http({
            url: '/login',
            method: 'post',
            data: {
                phone: this.state.phone,
                pass: this.state.pass
            }
        }).then(res => {
            if (res.data.status == 1) {
                message.success('登录成功');
                this.props.change_user_inif(res.data.data);
                this.props.history.replace('/');
            } else {
                message.error(res.data.msg);
            }
        })
    }

    reg() {

        if (!this.state.regName) {
            message.error('输入用户名');
            return false
        }
        if (!this.state.regPhone) {
            message.error('输入合法的手机号')
            return false
        }
        if (!this.state.regPass || !(this.state.regPass.length >= 4 && this.state.regPass.length <= 8)) {
            message.error('输入4-8位的密码')
            return false
        }

        React.http({
            url: '/register',
            method: 'post',
            data: {
                name: this.state.regName,
                phone: this.state.regPhone,
                pass: this.state.regPass
            }
        }).then(res => {
            if (res.data.status == 1) {
                message.success('创建成功')
                this.props.history.replace('/sign_in');
            } else {
                message.success(res.data.msg)
            }
        })
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
                                <input className='input' value={this.state.phone} onInput={(e) => { this.loginPhone(e) }} placeholder='手机号或邮箱'></input>
                            </div>
                            <div>
                                <span className='iconfont icon-suo'></span>
                                <input className='input' value={this.state.pass} onInput={(e) => { this.loginPass(e) }} placeholder='密码'></input>
                            </div>
                        </div>
                        <div style={{ margin: '10px 0' }}>
                            <input type='checkbox'></input>
                            <span>记住我</span>
                            <a href='#' style={{ float: 'right' }}>登录遇见问题?</a>
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
                                <input className='input' value={this.state.regName} onInput={(e) => { this.regName(e) }} placeholder='你的昵称'></input>
                            </div>
                            <div style={{ borderBottom: '1px solid #c8c8c8' }}>
                                <span className='iconfont icon-shoujihao'></span>
                                <input className='input' value={this.state.regPhone} onInput={(e) => { this.regPhone(e) }} placeholder='手机号'></input>
                            </div>
                            <div>
                                <span className='iconfont icon-suo'></span>
                                <input className='input' value={this.state.regPass} type='password' onInput={(e) => { this.regPass(e) }} placeholder='设置密码'></input>
                            </div>
                        </div>
                        <div className='reg_btn' onClick={this.reg.bind(this)}>注册</div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = function (state) {
    return {

    }
}

const mapDispathToProps = function (dispatch) {
    return {
        change_user_inif(item) {
            var action = {
                type: "change_user_inif",
                value: item
            }
            dispatch(action)
            localStorage.setItem('user_msg', JSON.stringify(item))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Login);