import './style/style.css';
import { useContext } from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import {ThemeContext} from './Components/ThemeContextWrapper'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
