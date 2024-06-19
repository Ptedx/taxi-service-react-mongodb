import './App.css';
import Container from './styled-components/general/container.tsx';
import WidthChecker from './components/general/WidthChecker.tsx';
import MainScreen from './components/body/mainScreen.js';
import CardAdvantages from './components/body/CardAdvantages.js';
import AdvantagesSection from './components/body/AdvantagesSection.js';
import Statistics from './components/body/Statistics.js';
import SwiperModule from './components/body/Swiper.js';
import MainMenu from './components/header/mainMenu.tsx';
import DropDownMenu from './components/header/dropdown.tsx';
import size from './styled-components/general/sizes.tsx';
import Footer from './components/footer/Footer.tsx';

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
