import styled from "styled-components";
export const FormItem = styled.div `
    margin-bottom: 1rem;
    width: 100%;
    border: none;
    height: 70px;
    background-color: #f6f6f6;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .05) inset;
    border-radius: 5px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        border: none;
        width: 80%;
        background: none;
        padding-left: 20px;
        cursor: pointer;
        outline: none;
        height: 100%;
    }
`;
export const Checkbox = styled.div `
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 11px;
    padding-top: 5px;

    span{
        padding-left: 10px;
    }

    label {
        width: 100%;
    }

    a{
        color: #495057;
        text-decoration: underline;
    }
`;
