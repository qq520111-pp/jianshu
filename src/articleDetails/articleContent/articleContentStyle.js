import styled from "styled-components";

const Style = styled.div`
    background: #fff;
    padding:30px;
    p{
        margin:0;
    }
    .article_title{
        font-size: 30px;
        font-weight: 700;
        word-break: break-word;
    }

    .article_author{
        width:100%;
    }

    .article_author span+span{
        margin-left:10px;
    }

    .article_detail{
        padding: 20px 0;
        font-size:16px;
        line-height:1.8;
        font-weight:700;
    }
`
export default Style