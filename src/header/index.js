import React from 'react';
import '../static/iconfont/iconfont.css'
import './index.css';
import HistoryList from "../main/historyList/historylist";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from 'antd';

class Header extends React.Component {

    render() {
        var login = <Link className='header-right header-login' to='/sign_in'>登录 </Link>;
        var reg = <Link className='header-right header-register' to='/sign_up'>  注册 </Link>;
        var user = null;
        var user_msg = JSON.parse(localStorage.getItem('user_msg'));

        if (user_msg) {
            login = null
            reg = null
            user = <div className='header-right user_name'>{user_msg.user_name}</div>
        }

        return (
            <nav className="bott-b navbar">
                <div className="header">
                    <a className='header-logo' href='/'>

                    </a>
                    <div className='header-right header-article'>
                        <span className='iconfont icon-combinedshapecopy2'></span>
                        <span>写文章</span>
                    </div>
                    {reg}
                    {login}
                    {user}
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
                                onBlur={this.props.blur.bind(this)}
                                onInput={this.props.onChange}
                            ></input>
                            <span className="iconfont icon-sousuo searchLogo" onMouseDown={this.props.schear.bind(this)}></span>
                            <HistoryList isHistoryShow={this.props.isHistoryShow} ></HistoryList>
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
        isHistoryShow: state.search.isHistoryShow,
        user: state.user_inif
    }
}
var mapDispatchToProps = function (dispatch) {
    return {
        focus(e) {
            // search-history

            var action = {
                type: 'change_input_width',
                wValue: 'change-inp-wid',
                isHistoryShow: true
            }
            dispatch(action)
        },
        blur(e) {
            var action = {
                type: 'change_input_width',
                wValue: '',
                isHistoryShow: false
            }
            dispatch(action)
        },
        onChange(e) {
            var action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        schear() {
            var data = JSON.parse(localStorage.getItem('searchHistory')) || [];
            data.push(this.props.value);
            localStorage.setItem('searchHistory', JSON.stringify(data))

            //拿到值路由跳转
            return false
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);