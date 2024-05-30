import { Brand } from "../../styled-components/header/menu.js";
import Header from "../../styled-components/header/header.js";
import { MenuItems } from "../../styled-components/header/menu.js";
const MainMenu = ()=>{

    return(
        <Header>
                <Brand><img src="/img/Logo-taxi.png" alt="logo-taxi"></img></Brand>
                <MenuItems>
                    <a href="#option1">Beneficios</a>
                    <a href="#option2">Depoimentos</a>
                </MenuItems>
        </Header>
    )
}

export default MainMenu