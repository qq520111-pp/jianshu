import React from 'react';
import './index.css'
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
import img from "../../static/421ec96ccef8aea708c84ba2972b5be484695f25.png";
import img1 from "../../static/f35f847410c2d919aee3f40701e6c2e8d234661e.jpg";

class Article extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [{
                img: '',
                author_name: '哈哈哈大帅比',
                wenzi: '1241',
                fangwen: '245',
            }, {
                img: '',
                author_name: '哈哈哈大帅比',
                wenzi: '1241',
                fangwen: '245',
            }, {
                img: '',
                author_name: '哈哈哈大帅比',
                wenzi: '1241',
                fangwen: '245',
            }, {
                img: '',
                author_name: '哈哈哈大帅比',
                wenzi: '1241',
                fangwen: '245',
            }, {
                img: '',
                author_name: '哈哈哈大帅比',
                wenzi: '1241',
                fangwen: '245',
            }]
        }
    }

    addList() {
        var arr = this.state.list;
        var list = arr.concat([{
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }])
        this.setState({
            list
        })
    }

    getDate() {
        var arr = this.state.list;
        var list = arr.concat([{
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }, {
            img: '',
            author_name: '哈哈哈大帅比',
            wenzi: '1241',
            fangwen: '245',
        }])
        this.setState({
            list
        })

    }

    componentDidMount() {
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
                this.getDate();
                window.onscroll = null;
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
                                <img src={img}></img>
                            </div>
                            <div className="swiper-slide">
                                <img src={img1}></img>
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
                            return (
                                <div className='article_list_item' key={index}>
                                    <h2 className='article_list_title'>
                                        <a href='#'>title</a>
                                    </h2>
                                    <div className='article_list_content'>
                                        杨丽萍徒弟水月和同性女人结婚，上了热搜，也抢了我的眼球。在中国，同性恋可以领证吗？合法吗？啥时可以同性恋结婚了？ 在中国，同性恋是不可以领证的。...
                                    </div>
                                    <div className='article_list_footer'>
                                        <div className='jsd-meta'>
                                            <span className='iconfont icon-zhuanshi'></span>
                                            124.2
                                        </div>
                                        <div className='shou'>
                                            author_name
                                        </div>
                                        <div className='shou'>
                                            <span className='iconfont icon-fayan2'></span>
                                            124
                                        </div>
                                        <div>
                                            <span className='iconfont icon-xin'></span>
                                            114
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