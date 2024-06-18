import { Brand, MenuItems } from "../../styled-components/header/menu.tsx";
import Header from "../../styled-components/header/header.tsx";

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