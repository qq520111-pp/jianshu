import styled from "styled-components";

const loginStyle = styled.div`
        .user_login_reg{
            width:100vw;
            height:100vh;
            background-color: #eee;
            overflow: hidden;
        }

        .login_logo{
            position: absolute;
            top: 56px;
            margin-left: 50px;
        }

        .login_logo img{
            width:100px;
        }

        .login_reg{
            box-sizing: border-box;
            width: 400px;
            padding: 50px;
            margin: 100px auto 0;
            background-color: #fff;
        }

        .login_reg_header{
            padding: 10px;
            margin-bottom: 50px;
            text-align: center;
        }

        .login_reg_header a{
            color: #969696;
            padding: 10px;
        }

        .login_reg_header span{
            color: #969696;
            padding: 10px;
            font-weight: 700;
            font-size: 18px;
        }

        .login_reg_header a:hover{
            border-bottom: 2px solid #ea6f5a;
        }

        .user_input{
            background-color: hsla(0,0%,71%,.1);
            border-radius: 6px;
            border: 1px solid #c8c8c8;
            text-align: left;
        }

        .user_input>div{
            position: relative;
        }

        .user_input .iconfont{
            position: absolute;
            top: 12px;
            left: 10px;
            font-size: 18px;
            color: #969696;
        }

        .user_input .input{
            box-sizing: border-box;
            border: none;
            outline: none;
            background-color: transparent;
            width: 100%;
            height: 50px;
            padding-left: 40px;
        }

        .login_btn,
        .reg_btn{
            box-sizing: border-box;
            margin-top: 30px;
            height: 44px;
            color: #fff;
            font-size: 18px;
            line-height: 44px;
            text-align: center;
            border-radius: 30px;
            background: #3194d0;
        }

        .reg_btn{
            background-color: #42c02e;
        }

        .login_reg_header .active{
            border-bottom: 2px solid #ea6f5a;
            color: #ea6f5a;
            font-weight: 700;
        }
`
export default loginStyle