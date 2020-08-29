import React from "react";
import AuthorArtiRecoStyle from "./authorArtiRecoStyle";
import erweima from "../../static/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png";
import { Link } from "react-router-dom";

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xiding: "orter_arti"
        }
    }

    componentDidMount() {
        var that = this;
        var count = 0;
        window.onscroll = function (e) {
            if (!count) { count = (that.refs[1].offsetTop) };
            if (window.scrollY - count >= 0) {
                that.xiding('orter_arti xiding');
            } else {
                that.xiding('orter_arti');
            }
        }
    }

    xiding(state) {
        this.setState({
            xiding: state
        })
    }

    render() {
        if (!this.props.article) { return false }
        return (
            <AuthorArtiRecoStyle >
                <div className="auth_orter_arti">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img className="article_avatar" src={erweima} alt='二维码'></img>
                        <div style={{ marginLeft: "8px", flex: 1 }}>
                            <div>
                                {this.props.article.user_msg.user_name}
                                <div className="guanzhu_btn shou" style={{ float: "right" }}>关注</div>
                            </div>
                            <div style={{ fontSize: "12px", color: "#969696", marginTop: "10px" }}>描述信息</div>
                        </div>
                    </div>
                    <div style={{ margin: "20px 0", background: " #eee", height: "1px" }}></div>
                    {
                        this.props.article.recomAuthorArti.map((item, index) => {
                            return (
                                <div className="article_list article_list_title  white-space" key={index}>
                                    <Link to={'/article/' + item._id} className="shou" target="_blank">{item.title}</Link>
                                    <div style={{ fontSize: "12px", color: " #969696", marginTop: "2px" }}>阅读9948</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={this.state.xiding} ref={1}>
                    <div className="orter_arti_title">推荐阅读</div>
                    {
                        this.props.article.recomOrderAuthorArti.map((item, index) => {
                            return (
                                <div className="article_list article_list_title white-space" key={index}>
                                    <Link to={'/article/' + item._id} className="shou" target="_blank">{item.title}</Link>
                                    <div style={{ fontSize: "12px", color: " #969696", marginTop: "2px" }}>阅读9948</div>
                                </div>
                            )
                        })
                    }
                </div>
            </AuthorArtiRecoStyle>
        )
    }
}


export default ArticleDetail