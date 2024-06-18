import styled from "styled-components";

export const SwiperModuleStyle = styled.div`
    padding: 100px 0 80px 0;
    background-color: #f8f8f8;
    border-radius: 0 0 5px 5px;
    text-align: center;

    &>h1{
        margin-bottom: 20px;
    }
`

export const SwipeCard = styled.div`
    border-radius: 10px;
    cursor: grab;

    &:active{
        cursor: grabbing;
    }
    
    img{
        height: 128px;
    }
`