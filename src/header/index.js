import React from 'react';
import '../static/iconfont/iconfont.css'
import './index.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="bott-b navbar">
                <div className="header">
                    <a className='header-logo' href='/'>

                    </a>
                    <div className='header-right header-article'>
                        <span className='iconfont icon-combinedshapecopy2'></span>
                        <span>写文章</span>
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
                        <div className='header-middle-item active' style={{ paddingLeft: 0 }}>
                            <span className="iconfont icon-shouye"></span>
                            <span className="hiddle-750" style={{ marginLeft: '8px' }}>首页</span>
                        </div>
                        <div className='header-middle-item'>
                            <span className="iconfont icon-xingzhuang"></span>
                            <span className="hiddle-750" style={{ marginLeft: '8px' }}>下载app</span>
                        </div>
                        <div className='header-middle-item' style={{ position: 'relative' }}>
                            <input placeholder='搜索'
                                className={this.props.wValue}
                                onFocus={this.props.focus}
                                onBlur={this.props.blur}
                                onInput={this.props.onChange}
                            ></input>
                            <span className="iconfont icon-sousuo searchLogo"></span>
                        </div>
                    </div>
                    <div className="show-768">
                        <span className='iconfont icon-gengduoliebiao' style={{ fontSize: '30px' }}></span>
                    </div>
                </div>
            </nav>
        );
    }
}

var mapStateToProps = function (state) {
    return {
        value: state.search.value,
        wValue: state.search.wValue,
    }
}
var mapDispatchToProps = function (dispatch) {
    return {
        focus(e) {
            var action = {
                type: 'change_input_width',
                wValue: 'change-inp-wid'
            }
            dispatch(action)
        },
        blur(e) {
            var action = {
                type: 'change_input_width',
                wValue: ''
            }
            dispatch(action)
        },
        onChange(e) {
            var action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);