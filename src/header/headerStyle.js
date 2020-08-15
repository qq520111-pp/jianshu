import styled from "styled-components";
import img from "../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png";

const headerStyle = styled.div` 
        .bott-b{
            position:fixed;
            top:0;
            width:100%;
            height: 56px;
            background: #fff;
            box-sizing: border-box;
            border-bottom: 1px solid #f0f0f0;
            z-index:999;
        }

        .header{
            height: 100%;
            min-width: 768px;
            max-width: 1440px;
            margin: 0 auto;
        }

        .header-logo{
            float: left;
            width:100px;
            height:56px;
            background-image: url(${img});
            background-size: contain;
        }

        .header-middle{
            box-sizing: border-box;
            padding-top: 8px;
            padding-bottom: 8px;
            height: 56px;
            align-items:center ;
        }

        .header-middle-item{
            display: inline-block;
            padding:  0 15px;
        }

        .show-768{
            line-height: 56px;
            display:none;
        }

        .header-middle-item input{
            box-sizing: border-box;
            width:240px;
            padding: 0 40px 0 20px;
            border: 1px solid #eee;
            background-color: #eee;
            height: 38px;
            border-radius: 19px;
            outline: none;
            transition: all 0.5s;
        }

        .header-middle-item .change-inp-wid{
            width:320px;
        }

        .header-middle-item input::placeholder{
            color:#969696;
        }

        .searchLogo{
            position: absolute;
            top: 0;
            bottom:0;
            height: 32px;
            width: 32px;
            right: 22px;
            margin: auto 0;
            font-size: 18px;
            text-align: center;
            line-height: 28px;
            color:#969696 ;
            border-radius: 50%;
        }

        .user_name{
            padding: 0 30px;
            line-height: 56px;
        }

        .header-middle-item .change-inp-wid+.searchLogo{
            background-color: #969696;
            color: #f0f0f0;
        }


        .active{
            color: #ea6f5a;
        }

        .header-right{
            float: right;
            text-align: center;
        }

        .header-article{
            width:100px;
            height: 40px;
            border-radius: 20px;
            background-color: #ea6f5a;
            line-height: 40px;
            color: #fff;
            margin: 8px 12px 0;
            cursor: pointer;
        }

        .header-register{
            width: 80px;
            height: 38px;
            border-radius: 20px;
            border: 1px solid #ea6f5a;
            line-height: 38px;
            color: #ea6f5a;
            margin: 8px 5px 0 15px;
            cursor: pointer;
        }

        .header-login{
            padding: 6px 12px;
            margin: 8px 6px 0 10px;;
            color: #969696;
        }

        .header-banner{
            box-sizing: border-box;
            width: 50px;
            height: 24px;
            margin: 16px 12px 0 6px;
            background-image: url('../static/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png');
            background-size: contain;
            background-repeat: no-repeat;
        }

        .header-font{
            box-sizing: border-box;
            width: 44px;
            height: 18px;
            margin: 20px 0;
            background-image: url('../static/QQ截图20200714110717.png');
            background-size: contain;
            background-repeat: no-repeat;
        }

        .history-list{
            position: absolute;
            top: 51px;
            left: 15px;
            padding: 12px;
            background-color: #fff;
            border: 1px solid #f0f0f0;
            border-radius: 6px;
            box-shadow: 0 0 20px -10px #000;
            margin: 0 auto;
            z-index: 99;
        }

        .history-list-item{
            position: absolute;
            left: 30px;
            right: 0;
            top: -10px;
            width: 20px;
            height: 20px;
            border: 1px solid #f0f0f0;
            border-bottom: transparent;
            border-right: transparent;
            background-color: #fff;
            z-index: -23;
            transform: rotate(45deg);
        }

        .history-list-hover:hover{
            width: 100%;
            background: #f0f0f0;
        }

        
        .user_show_hide{
            position:relative;
        }

        .user_shop_list{
            position:absolute;
            width:100%;
            bottom:0;
            transform:translateY(100%);
            background:#eee;
            display:none;
            z-index:99;
        }

        .user_show_hide:hover .user_shop_list{
            display:block;
        }

        .user_shop_list .shou:hover{
            background:#ddd;
            color:#fff;
        }
`
export default headerStyle