import styled from "styled-components"

const ButtonStyle = styled.div`
    margin-top: 25px;
    height: 70px;
    background-color: #ffe46e;
    color:#333;
    text-align: center;
    border-radius: 5px;
    line-height: 70px;
    font-weight: 700;
    position: relative;
    overflow: hidden;
    width: 80%;
    box-shadow: 0px 15px 35px rgba(0,0,0, 0.05);

    input{
        font-weight: bold;
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
    }
    a{
        position:absolute;
        width: 100%;
        left: 0;
        right: 0;
        height: 100%;
        color: #333;
        text-decoration: none;
        cursor: pointer;
    }
`
export default ButtonStyle