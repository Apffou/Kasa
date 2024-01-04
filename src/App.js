import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';

function App() {
  return (
    <body>
      <Header/>
      <Background></Background>
      <Footer/>
    </body>
  );
}

export default App;
