import React from "react";
import ArticleDetails from "./articleDetailStyle";
import Header from "../header/index";
import ArticleContent from "./articleContent/index"
import AuthoArtiReco from "./authoArtiReco/index"

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            article: null
        }
    }
    componentDidUpdate() {
        // this.req()
    }

    componentDidMount() {
        this.req()
    }
    req() {
        var { id } = this.props.match.params;
        React.http({
            url: "/articleDetail",
            data: {
                id
            },
            method: "POST"
        }).then(res => {
            this.setState({
                article: res.data
            })
        })
    }

    render() {
        return (
            <div style={{ background: "#f9f9f9", overflowY: "auto", height: '100vh' }}>
                <Header></Header>
                <ArticleDetails className="container clearFloat">
                    <div className="col-xs-16">
                        <ArticleContent article={this.state.article}></ArticleContent>
                    </div>
                    <div className="col-xs-7">
                        <AuthoArtiReco article={this.state.article} history={this.props.history}></AuthoArtiReco>
                    </div>
                </ArticleDetails>
            </div>
        )
    }
}


export default ArticleDetail