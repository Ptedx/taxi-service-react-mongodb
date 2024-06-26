import './App.css';
import Container from './styled-components/general/container';
import WidthChecker  from './components/general/WidthChecker';
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
