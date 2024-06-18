import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import Container from './styled-components/general/container.js';
import WidthChecker from './components/general/WidthChecker.js';
import MainScreen from './components/body/mainScreen.js';
import CardAdvantages from './components/body/CardAdvantages.js';
import AdvantagesSection from './components/body/AdvantagesSection.js';
import Statistics from './components/body/Statistics.js';
import SwiperModule from './components/body/Swiper.js';
import MainMenu from './components/header/mainMenu.js';
import DropDownMenu from './components/header/dropdown.js';
import size from './styled-components/general/sizes.js';
import Footer from './components/footer/Footer.js';
function App() {
    return (_jsx("div", { className: "App", children: _jsxs(Container, { children: [WidthChecker(size.mobile) ? _jsx(MainMenu, {}) : _jsx(DropDownMenu, {}), _jsx(MainScreen, {}), _jsx(CardAdvantages, {}), _jsx(AdvantagesSection, {}), _jsx(Statistics, {}), _jsx(SwiperModule, {}), _jsx(Footer, {})] }) }));
}
export default App;
