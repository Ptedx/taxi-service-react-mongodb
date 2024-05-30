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
  return (
    <div className="App">
      <Container>
          {WidthChecker(size.mobile)? <MainMenu />: <DropDownMenu />}
          <MainScreen />
          <CardAdvantages />
          <AdvantagesSection />
          <Statistics />
          <SwiperModule />
          <Footer />
      </Container>
    </div>
  );
}

export default App;
