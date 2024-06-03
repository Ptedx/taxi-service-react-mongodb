import { Brand } from "../../styled-components/header/menu.js";
import Header from "../../styled-components/header/header.js";
import { MenuItems } from "../../styled-components/header/menu.js";
const MainMenu = ()=>{

    return(
        <Header>
                <Brand><img src="/img/Logo-taxi.png" alt="logo-taxi"></img></Brand>
                <MenuItems>
                    <a href="#beneficts">Beneficios</a>
                    <a href="#depoiments">Depoimentos</a>
                </MenuItems>
        </Header>
    )
}

export default MainMenu