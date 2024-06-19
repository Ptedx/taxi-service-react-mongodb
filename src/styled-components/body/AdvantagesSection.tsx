import styled from "styled-components";


export const AdvantagesStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
    background-color: #f8f8f8;
    border-radius: 5px 5px 0 0;
    padding-left: 15px;
    padding-right: 15px;

    p{
        padding: 0 5px;
    }

    & > div{
        background-color: #ffffff;
        margin: 10px 0;
        border-radius: 10px;
        box-shadow: 0px 15px 35px rgba(0,0,0, 0.05);
    }
`

export const AdvantagesItem = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        flex-direction:column;
        text-align: center;
        width: 50%;
    }

    div div{
        width: 80%;
        margin-bottom: 10px;
    }
    @media (max-width: 767px){
        flex-direction: column;

        div{
            width: 100%;
        }
    }
`
interface PhotoProps {
    bg: string;
  }


export const Photo = styled.div<PhotoProps>`
    min-height: 330px;
    background: url(${props=> props.bg}) no-repeat;
    background-position: center;
`