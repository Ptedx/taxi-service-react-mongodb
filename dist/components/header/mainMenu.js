import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Brand } from "../../styled-components/header/menu.js";
import Header from "../../styled-components/header/header.js";
import { MenuItems } from "../../styled-components/header/menu.js";
const MainMenu = () => {
    return (_jsxs(Header, { children: [_jsx(Brand, { children: _jsx("img", { src: "/img/Logo-taxi.png", alt: "logo-taxi" }) }), _jsxs(MenuItems, { children: [_jsx("a", { href: "#beneficts", children: "Beneficios" }), _jsx("a", { href: "#depoiments", children: "Depoimentos" })] })] }));
};
export default MainMenu;
