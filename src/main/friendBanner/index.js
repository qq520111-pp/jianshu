import React from 'react';
import './index.css'
import img1 from "../../static/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
import img2 from "../../static/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
import img3 from "../../static/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
import img4 from "../../static/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
import erweima from "../../static/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"

class FriendBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            list: []
        }
    }

    onbrush(e) {
        var num = this.state.count + 1;
        this.setState({
            count: num
        })
        this.ele.style.transform = `rotate(${this.state.count * 360}deg)`;
        this.req();
    }

    componentDidMount() {
        this.req();
    }

    req() {
        React.http({
            url: '/getAuthor'
        }).then(res => {
            var arr = res.data.sort(() => {
                return 0.5 - Math.random()
            })
            this.setState({
                list: arr
            })
        })
    }

    render() {
        return (
            <div className="col-xs-7 col-xs-offset-1">
                <div className="friend_banner">
                    <a href="#">
                        <img src={img1} alt='article_img'></img>
                    </a>
                    <a href="#">
                        <img src={img2} alt='article_img'></img>
                    </a>
                    <a href="#">
                        <img src={img3} alt='article_img'></img>
                    </a>
                    <a href="#">
                        <img src={img4} alt='article_img'></img>
                    </a>
                </div>
                <a href="#" className='QR_code'>
                    <div className="min_erweima">
                        <img src={erweima} alt='二维码'></img>
                    </div>
                    <div>
                        <p style={{ fontSize: '15px' }}>下载简书手机app></p>
                        <p className='czou' style={{ color: '#999' }}>随时随地发现和创作内容</p>
                    </div>
                    <div className='show_max_erweima'>
                        <img src={erweima} alt='大图二维码'></img>
                    </div>
                </a>
                <div>
                    <div className='clearFloat' style={{ fontSize: '14px', color: '#969696' }}>
                        <div style={{ float: 'left' }}>
                            推荐作者
                        </div>
                        <a href="javascript:;" className='refresh_active' style={{ float: 'right', color: '#969696' }} onClick={(e) => (this.onbrush(e))}>
                            <span className="iconfont icon-shuaxin refresh rotate-donghua-720" ref={(ref) => { this.ele = ref }}></span>
                            <span>换一批</span>
                        </a>
                    </div>
                    <div className='article_list'>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <div className='author_list_item' key={index}>
                                        <div className='shou'>
                                            <img src={erweima} alt='二维码'></img>
                                        </div>
                                        <div className="article_list_title" style={{ flex: 1, marginTop: "0" }}>
                                            <p className='shou' >{item.user_name}</p>
                                            <p style={{ color: '#969696', fontSize: '12px', marginTop: '6px' }}>
                                                写了{0}k字 · {item.guanzhu}k喜欢
                                            </p>
                                        </div>
                                        <div className='shou guangzhu' style={{ color: '#42c02e', fontSize: '13px', alignSelf: 'flex-start', marginTop: '2px' }}>
                                            + 关注
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='max_btn shou' style={{ marginTop: '20px' }}>
                            查看全部 <span className='iconfont icon-xiangyou' style={{ fontSize: '12px' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FriendBanner