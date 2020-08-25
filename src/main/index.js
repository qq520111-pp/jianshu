import React from 'react';
import FriendBanner from "./friendBanner/index";
import Article from "./article/index";
import IndexStyle from './indexStyle';
import { Link } from "react-router-dom";
import Hook from "../hook/hook.js";

class MainContent extends React.Component {
    render() {
        return (
            <IndexStyle>
                <div className="container index clearFloat">
                    <Article history={this.props.history}></Article>
                    <FriendBanner></FriendBanner>
                    <Link to="hook">
                        <button>click</button>
                    </Link>
                </div>
            </IndexStyle>
        );
    }
}

export default MainContent;