import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import TextState from './context/TextState';

function App() {
  return (
    <TextState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/about' element={<About title="About" />} />
        </Routes>
      </Router>
    </TextState>
  );
}

export default App;
