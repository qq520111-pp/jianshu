import React from 'react';
import './index.css'
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wValue: '',
            value: ''
        }
    }

    focus(e) {
        this.setState({
            wValue: 'change-inp-wid'
        })
    }

    blur(e) {
        this.setState({
            wValue: ''
        })
    }

    change(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <nav className="bott-b navbar">
                <div className="header">
                    <a className='header-logo' href='/'>

                    </a>
                    <div className='header-right header-article'>
                        写文章
                        </div>
                    <Link className='header-right header-register' to='/sign_in'>
                        注册
                        </Link>
                    <Link className='header-right header-login' to='/sign_in'>
                        登录
                        </Link>
                    <div className='header-right header-banner'>
                    </div>
                    <div className='header-right header-font'>
                    </div>
                    <div className='header-middle container'>
                        <div className='header-middle-item active'>首页</div>
                        <div className='header-middle-item'>下载app</div>
                        <div className='header-middle-item'>
                            <input placeholder='搜索' className={this.state.wValue}
                                onFocus={(e) => {
                                    this.focus(e)
                                }}
                                onBlur={(e) => {
                                    this.blur(e)
                                }}
                                onInput={(e) => {
                                    this.change(e)
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;