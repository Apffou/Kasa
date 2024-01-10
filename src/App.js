import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import Tag from './components/Tag/Tag';
import Dropdown from './components/Dropdown/Dropdown';
import Thumb from './components/Thumb/Thumb';
import data from './logements.json';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tag nom="HOME"/> } />
        <Route path="/about" element={<Tag nom="about"/> } />
      </Routes>
      <Background paysage="../images/paysage-cotier.png" alt='Paysage au bord de mer avec des falaises'></Background>
      <Tag nom="Cozy"></Tag>
      <Tag nom="Canal"></Tag>
      <Tag nom="Paris10"></Tag>
      <Dropdown title="Description"></Dropdown>
      <Dropdown title="Équipements"></Dropdown>
      <section className='cartes'>
      { data.map((logement) => <Thumb logement={logement} />)} 
      </section>
      <Footer/>
    </>
  );
}

export default App;
