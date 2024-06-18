import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MainScreenStyled } from "../../styled-components/body/mainScreen.js";
import Form from "./form.js";
import Presentation from "./Presentation.js";
const MainScreen = () => {
    return (_jsxs(MainScreenStyled, { children: [_jsx(Presentation, {}), _jsx(Form, {})] }));
};
export default MainScreen;
