import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header.js'
import Navigation from './routes/routes.js';

function App() {
  
  return (
    <BrowserRouter>
      <Header 
        source='src/assets/blank-profile-picture-973460_1280.png'
        buttonContent={<FontAwesomeIcon icon={faBars}/>}
      />
      <Navigation />
    </BrowserRouter>
  )
}

export default App;