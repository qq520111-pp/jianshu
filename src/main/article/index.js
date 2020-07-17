import React from 'react';
import './index.css'

class Article extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="col-xs-16 ">
                文章内容
            </div>
        );
    }
}

export default Article;