import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FooterRow, FooterStyle, Footitem } from "../../styled-components/footer/Footer.js";
const Footer = () => {
    return (_jsx(FooterStyle, { children: _jsxs(FooterRow, { children: [_jsx(Footitem, { children: _jsx("p", { children: "Copyright \u00A9 2023 Vinicius Costa. All rights reserved." }) }), _jsxs(Footitem, { children: [_jsx("a", { href: "/", children: "Privacy Policy" }), _jsx("a", { href: "/", children: "Terms of Use" }), _jsx("a", { href: "/", children: "Sales and Refunds" }), _jsx("a", { href: "/", children: "Legal" }), _jsx("a", { href: "/", children: "Site Map" })] })] }) }));
};
export default Footer;
