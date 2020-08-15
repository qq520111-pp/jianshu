import React from "react";
import ArticleContentStyle from "./articleContentStyle";
import erweima from "../../static/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"

class ArticleDetail extends React.Component {
    render() {
        if (!this.props.article) { return false }
        var result = this.props.article.content.replace(/<img/g, `<img style="width: 100%;margin:20px 0;" alt='article_img'`);

        return (
            <ArticleContentStyle>
                <h1 className='article_title'>{this.props.article.title}</h1>
                <div className='author_list_item'>
                    <div className='shou'>
                        <img src={erweima} alt='二维码'></img>
                    </div>
                    <div>
                        <p className='shou'>
                            {this.props.article.user_msg.user_name}
                            <div className="guanzhu_btn shou" style={{ float: "right" }}>关注</div>
                        </p>
                        <p className="article_author" style={{ color: '#969696', fontSize: '12px', marginTop: "8px" }}>
                            <span>钻石 {this.props.article.zuanshi}</span>
                            <span>时间 {this.props.article.zuanshi}</span>
                            <span>字数 {this.props.article.zuanshi}</span>
                            <span>阅读 {this.props.article.zuanshi}</span>
                        </p>
                    </div>
                    {/* <div className='shou guangzhu' style={{ color: '#42c02e', fontSize: '13px', float: 'right' }}>
                            + 关注
                                        </div> */}
                </div>
                <div className="article_detail" dangerouslySetInnerHTML={{ __html: result }}></div>
            </ArticleContentStyle>
        )
    }
}


export default ArticleDetail