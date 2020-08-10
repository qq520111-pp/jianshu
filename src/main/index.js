import React from 'react';
import FriendBanner from "./friendBanner/index";
import Article from "./article/index";
import IndexStyle from './indexStyle';

class MainContent extends React.Component {
    render() {
        return (
            <IndexStyle>
                <div className="container index clearFloat">
                    <Article></Article>
                    <FriendBanner></FriendBanner>
                </div>
            </IndexStyle>
        );
    }
}

export default MainContent;