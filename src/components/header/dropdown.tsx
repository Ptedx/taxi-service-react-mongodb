import React, { useState } from 'react';
import { Brand } from '../../styled-components/header/menu';
import Header from '../../styled-components/header/header';
import { MainMenu, MenuButton, MenuContainer, MenuContent } from '../../styled-components/header/dropdown';

const DropDownMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
