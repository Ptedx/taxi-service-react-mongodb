import styled from "styled-components";
export const MainScreenStyled = styled.div `
    display:flex;
    div{
        width: 80%;
        text-align: center;
        margin: 10px auto;
    }

    @media (max-width:767.98px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;

        div{
            width: 100%;
        }
        h1{
            font-size: 32px;
        }
    }
`;
