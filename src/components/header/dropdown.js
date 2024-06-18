import React, { useState } from 'react';
import { Brand } from '../../styled-components/header/menu.tsx';
import Header from '../../styled-components/header/header.tsx';
import { MainMenu, MenuButton, MenuContainer, MenuContent } from '../../styled-components/header/dropdown.tsx';

const DropDownMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Header>
       <MainMenu>
            <Brand><img src="/img/Logo-taxi.png" alt="logo-taxi"></img></Brand>
            <MenuButton onClick={toggleMenu}>
                <span></span>
            </MenuButton>
        </MainMenu> 
      <MenuContainer isVisible={isVisible}>
        <MenuContent>
          <a href="#beneficts">Beneficios</a>
          <a href="#depoiments">Depoimentos</a>
        </MenuContent>
      </MenuContainer>
    </Header>
  );
};

export default DropDownMenu;
