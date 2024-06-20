import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Brand } from '../../styled-components/header/menu';
import Header from '../../styled-components/header/header';
import { MainMenu, MenuButton, MenuContainer, MenuContent } from '../../styled-components/header/dropdown';
const DropDownMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };
    return (_jsxs(Header, { children: [_jsxs(MainMenu, { children: [_jsx(Brand, { children: _jsx("img", { src: "/img/Logo-taxi.png", alt: "logo-taxi" }) }), _jsx(MenuButton, Object.assign({ onClick: toggleMenu }, { children: _jsx("span", {}) }))] }), _jsx(MenuContainer, Object.assign({ isVisible: isVisible }, { children: _jsxs(MenuContent, { children: [_jsx("a", Object.assign({ href: "#beneficts" }, { children: "Beneficios" })), _jsx("a", Object.assign({ href: "#depoiments" }, { children: "Depoimentos" }))] }) }))] }));
};
export default DropDownMenu;
