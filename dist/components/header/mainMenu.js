import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Brand, MenuItems } from "../../styled-components/header/menu";
import Header from "../../styled-components/header/header";
const MainMenu = () => {
    return (_jsxs(Header, { children: [_jsx(Brand, { children: _jsx("img", { src: "/img/Logo-taxi.png", alt: "logo-taxi" }) }), _jsxs(MenuItems, { children: [_jsx("a", Object.assign({ href: "#beneficts" }, { children: "Beneficios" })), _jsx("a", Object.assign({ href: "#depoiments" }, { children: "Depoimentos" }))] })] }));
};
export default MainMenu;
