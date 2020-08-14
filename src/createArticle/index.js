import React from 'react';
import CreateArticleStyle from './createArticleStyle';
import Editor from './Editor.js';
import Header from "../header/index";
import { message, Input } from 'antd';
var contents = ''
class CreateArticle extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

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
        return <div>
            <Header></Header>
            <CreateArticleStyle>
                <div className='container'>
                    <Input placeholder="请输入您的标题" onChange={(e) => { this.getTitle(e) }} style={{ marginBottom: '20px' }} />
                    <Editor id={'text'} value={contents} callback={content => { this.editorChange(content) }} width="100%" height="780px"></Editor>
                </div>
            </CreateArticleStyle>
        </div>

    }

    editorChange(content) {
        if (!content) {
            message.error('请输入内容')
            return false
        }

        if (!this.state.title) {
            message.error('请输入标题')
            return false
        }
        var user_msg = JSON.parse(localStorage.getItem('user_msg'));
        React.http({
            url: '/createArticle',
            method: 'POST',
            data: {
                title: this.state.title,
                id: user_msg._id,
                content: content
            }
        }).then(res => {
            if (res.status === 200) {
                this.props.history.push('/');
            }

            this.setState({
                title: ''
            })
        })
    }

    getTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
}

export default CreateArticle