import React from 'react';
import './index.css'
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
import img from "../../static/421ec96ccef8aea708c84ba2972b5be484695f25.png";
import img1 from "../../static/f35f847410c2d919aee3f40701e6c2e8d234661e.jpg";
import { message } from 'antd';

var element = document.createElement('div');
class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            index: 0
        }

    }

    articleReq(index) {
        React.http({
            url: '/',
            method: 'post',
            data: {
                index: index
            }
        }).then(res => {
            console.log(res);
            if (!res.data.length) {
                message.error('暂无更多数据!!!')
                return false
            }
            var arr = this.state.list.concat(res.data);
            var num = this.state.index + 1;

            this.setState({
                list: arr,
                index: num
            })
            console.log(this.state.list);
            console.log(num);
        })
    }

    addList() {
        this.articleReq(this.state.index);
    }

    componentDidMount() {
        this.articleReq(this.state.index);
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        var mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
            },
            pagination: {  // 如果需要分页器
                el: '.swiper-pagination',
            },
            navigation: { // 如果需要前进后退按钮
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        });

        mySwiper.el.onmouseover = function () {
            mySwiper.navigation.$nextEl.addClass('show');
            mySwiper.navigation.$prevEl.addClass('show');
        }
        //鼠标覆盖停止自动切换与隐藏前进后退按钮
        mySwiper.el.onmouseout = function () {
            mySwiper.navigation.$nextEl.removeClass('show');
            mySwiper.navigation.$prevEl.removeClass('show');
        }


        window.onscroll = (e) => {
            //为了保证兼容性，这里取两个值，哪个有值取哪一个
            //scrollTop就是触发滚轮事件时滚轮的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var chaHeight = document.documentElement.scrollHeight - scrollTop - 200;
            var screenHeight = window.innerHeight;

            if (chaHeight - screenHeight <= 0) {
                window.onscroll = null;
                this.articleReq(this.state.index);
            }
        }
    }

    render() {
        return (
            <div className="col-xs-16" style={{ padding: '4px 5px 0 0' }}>
                <div className='banner'>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={img} alt='banner_img'></img>
                            </div>
                            <div className="swiper-slide">
                                <img src={img1} alt='banner_img'></img>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
                <div className='article_list'>
                    {
                        this.state.list.map((item, index) => {
                            var result = item.content.replace(/<img/g, `<img `);
                            var str1 = result.split('src="')[1];
                            if (str1) var str2 = str1.split('"')[0];
                            element.innerHTML = result;

                            var str = element.textContent;

                            str = str.slice(0, Math.min(80, str.length)) + "...";
                            if (str2) { str = `<img style='width: 60px;height:60px;float:right;' src="${str2}" alt='article_img' />` + str }

                            return (
                                <div className='article_list_item' key={index}>
                                    <h2 className='article_list_title'>
                                        <a href='javascript:;' onClick={(e) => { this.props.history.push('/article/' + item._id) }}>{item.title}</a>
                                    </h2>
                                    <div className='article_list_content' dangerouslySetInnerHTML={{ __html: str }}>
                                    </div>
                                    <div className='article_list_footer'>
                                        <div className='jsd-meta'>
                                            <span className='iconfont icon-zhuanshi'></span>
                                            {item.zuanshi}
                                        </div>
                                        <div className='shou'>
                                            作者名字
                                        </div>
                                        <div className='shou'>
                                            <span className='iconfont icon-fayan2'></span>
                                            {item.fayang}
                                        </div>
                                        <div>
                                            <span className='iconfont icon-xin'></span>
                                            {item.guanzhu}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='loadMore shou' onClick={(e) => (this.addList(e))}>
                        阅读更多
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;