import styled from "styled-components";
export const FooterStyle = styled.div `
    display:flex;
    justify-content: space-between;
`;
export const FooterRow = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`;
export const Footitem = styled.div `
    width: 50%;

    a{
        margin-left:10px;
        font-size: 12px;
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
    @media (max-width:768px) {
        font-size: 11px;
    }
`;
