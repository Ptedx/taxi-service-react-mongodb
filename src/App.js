import './App.css';
import Container from './styled-components/general/container.tsx';
import WidthChecker from './components/general/WidthChecker.tsx';
import MainScreen from './components/body/mainScreen.tsx';
import CardAdvantages from './components/body/CardAdvantages.tsx';
import AdvantagesSection from './components/body/AdvantagesSection.tsx';
import Statistics from './components/body/Statistics.tsx';
import SwiperModule from './components/body/Swiper.tsx';
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
