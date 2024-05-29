import { Brand } from "../../styled-components/header/menu";
import Header from "../../styled-components/header/header";
import { MenuItems } from "../../styled-components/header/menu";
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