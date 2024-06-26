import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import Container from './styled-components/general/container';
import WidthChecker from './components/general/WidthChecker';
import MainScreen from './components/body/mainScreen';
import CardAdvantages from './components/body/CardAdvantages';
import AdvantagesSection from './components/body/AdvantagesSection';
import Statistics from './components/body/Statistics';
import SwiperModule from './components/body/Swiper';
import MainMenu from './components/header/mainMenu';
import DropDownMenu from './components/header/dropdown';
import size from './styled-components/general/sizes';
import Footer from './components/footer/Footer';
function App() {
    return (_jsx("div", { className: "App", children: _jsxs(Container, { children: [WidthChecker(size.mobile) ? _jsx(MainMenu, {}) : _jsx(DropDownMenu, {}), _jsx(MainScreen, {}), _jsx(CardAdvantages, {}), _jsx(AdvantagesSection, {}), _jsx(Statistics, {}), _jsx(SwiperModule, {}), _jsx(Footer, {})] }) }));
}
export default App;
