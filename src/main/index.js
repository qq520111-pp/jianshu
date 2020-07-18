import React from 'react';
import './index.css'
import FriendBanner from "./friendBanner/index";
import Article from "./article/index";

class MainContent extends React.Component {
    render() {
        return (
            <div className="container index clearFloat">
                <Article></Article>
                <FriendBanner></FriendBanner>
            </div>
        );
    }
}

export default MainContent;