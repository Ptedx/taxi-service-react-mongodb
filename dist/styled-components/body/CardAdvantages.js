import styled from "styled-components";
export const CardMainStyle = styled.div `
    display: flex;
    flex-wrap:wrap;
    margin-left: -15px;
    margin-right: -15px;

    div{
        width:25%;
        text-align: center;
    }
    
    img{
        background-position: center;
        height: 128px;
    }
    div img[src="/img/mac.svg"]{
            height:20px;
            width: 60px;
        }

    @media (max-width: 992px) {
        &{
            margin-left:0;
            margin-right:0;
        }
        div{
            width:50%;
            margin-bottom: 10px;
        }
    }
`;
