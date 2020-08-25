import styled from "styled-components";

const Style = styled.div`
    margin-left:10px;
    position:relative;
    .article_title{
        font-size: 30px;
        font-weight: 700;
        word-break: break-word;
    }

    .auth_orter_arti{
        background: #fff;
        padding:20px;
        margin-bottom:12px;
    }

    .orter_arti{
        background: #fff;
        padding:20px;  
    }

    .orter_arti_title{
        border-left:4px solid red;
        padding-left:6px;
    }

    .article_avatar{
        width:40px;
        height:40px;
        border-radius:50%;
    }

    .article_list{
        margin:16px 0;
    }

    .xiding{
        position:absolute;
        top:56px;
        width:100%;
    }
`
export default Style