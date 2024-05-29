import styled from "styled-components";

export const Brand = styled.div`
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;

    img{
        max-height:70px;
    }
`

export const MenuDropDown = styled.button`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: none;

    &&:hover{
        cursor: pointer;
    }

    span{
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        content: "";
        background: no-repeat center;
        background-size: 100%;
        background-image: url('/img/Hamburger_icon.png')
    }
`

export const MenuItems = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    a{
        padding-left: 25px;
        text-decoration: none;
        color: black;
    }
`