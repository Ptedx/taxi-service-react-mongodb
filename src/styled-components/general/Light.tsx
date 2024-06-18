import styled from "styled-components";

const Light= styled.div`
    @keyframes moveLight {
    0%, 33%{ 
        left: 0px;
        transform: translate(calc(0% - 95px), -40px) rotate(45deg);
    }
    100%, 66%{
        left: calc(100% + 25px);
        transform: translate(calc(100% + 55px), -40px) rotate(45deg);
    }
}
    background-color: rgba(255, 255, 255, 0.5);
    height: 155px !important;
    width: 25px !important;
    margin: 0 !important;
    animation: moveLight 3s infinite;
    position: absolute;
    z-index: 2;
`
export default Light