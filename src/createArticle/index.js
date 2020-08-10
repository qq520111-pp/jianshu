import React from 'react';
import CreateArticleStyle from './createArticleStyle';
import { message } from 'antd';

class CreateArticle extends React.Component {

    componentWillMount() {
        var user_msg = JSON.parse(localStorage.getItem('user_msg'));
        if (!user_msg) {
            message.success('继续操作前请先登录或注册', 2.5, (res) => {
                //跳转登录路由
                this.props.history.push('/login/sign_in');
            });
        }
    }

    render() {
        return <CreateArticleStyle>
            <div>我是创建文章组件</div>
        </CreateArticleStyle>
    }
}


export default CreateArticle