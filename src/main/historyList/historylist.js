import React from 'react';
import './index.css'
import { List } from 'antd';

class HistoryList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var user_msg = JSON.parse(localStorage.getItem('searchHistory'));
        var data = user_msg || [];
        if (!this.props.isHistoryShow && (!data.length)) {
            return null
        } else {
            return (
                <div className='history-list'>
                    <List
                        style={{ width: '216px' }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item className='history-list-hover'>
                                <div >{item}</div>
                                <div className='delete-item'>x</div>
                            </List.Item>
                        )}
                    />
                    <div className='history-list-item'></div>
                </div>)
        }
    }
}

export default HistoryList;