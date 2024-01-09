import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import Tag from './components/Tag/Tag';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <>
      <Header />
      <Background paysage="../images/paysage-cotier.png" alt='Paysage au bord de mer avec des falaises'></Background>
      <Tag nom="Cozy"></Tag>
      <Tag nom="Canal"></Tag>
      <Tag nom="Paris10"></Tag>
      <Dropdown title="Description"></Dropdown>
      <Dropdown title="Équipements"></Dropdown>
      <Footer/>
    </>
  );
}

export default App;
