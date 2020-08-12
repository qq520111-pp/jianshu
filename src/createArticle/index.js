import React from 'react';
import CreateArticleStyle from './createArticleStyle';
import Editor from './Editor.js';
import { message } from 'antd';
var contents = ''
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
            <div className='container'>
                <Editor id={'text'} value={contents} callback={content => { this.editorChange(content) }} width="100%" height="780px"></Editor>
            </div>
        </CreateArticleStyle>
    }

    editorChange(content) {
        console.log(content);
        if (!content) {
            message.error('请输入内容')
            return false
        }
    }
}

export default CreateArticle