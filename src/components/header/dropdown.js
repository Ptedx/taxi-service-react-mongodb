import React, { useState } from 'react';
import { Brand } from '../../styled-components/header/menu.js';
import Header from '../../styled-components/header/header.js';
import { MainMenu, MenuButton, MenuContainer, MenuContent } from '../../styled-components/header/dropdown.js';

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
          <a href="#option1">Beneficios</a>
          <a href="#option2">Depoimentos</a>
        </MenuContent>
      </MenuContainer>
    </Header>
  );
};

export default DropDownMenu;
