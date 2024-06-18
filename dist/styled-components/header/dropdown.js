import styled from 'styled-components';
// Styled-components para estilos
export const MenuContainer = styled.div `
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  width: 100%;
  background-color: #f9f9f9;
  border-radius:10px;
`;
export const MenuButton = styled.button `
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
        background: no-repeat center center;
        background-size: 100% 100%;
        background-image: url('/img/Hamburger_icon.png')
    }
`;
export const MainMenu = styled.div `
    display:flex;
    width:100%;
    justify-content: space-between;
`;
export const MenuContent = styled.div `
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    width: 100%;
    text-align: center;
    border-top: 1px solid #ccc;

    &:hover {
      background-color: #f1f1f1;
    }

    &:first-child {
      border-top: none;
    }
  }
`;
