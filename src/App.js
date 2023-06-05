import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Accommodations from './pages/accommodations/Accommodations';
import Error from './pages/error/Error';
import './styles/_main.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;