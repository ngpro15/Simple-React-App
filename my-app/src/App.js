import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </Router>
  );
}

export default App;