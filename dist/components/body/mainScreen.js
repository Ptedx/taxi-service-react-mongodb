import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MainScreenStyled } from "../../styled-components/body/mainScreen";
import Form from "./form";
import Presentation from "./Presentation";
const MainScreen = () => {
    return (_jsxs(MainScreenStyled, { children: [_jsx(Presentation, {}), _jsx(Form, {})] }));
};
export default MainScreen;
