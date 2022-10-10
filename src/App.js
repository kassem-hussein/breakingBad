import './App.css';
import { Header } from './components/index';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Season from './pages/Season/Season';
import Characters from './pages/Characters/Characters';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/breakingBad/" index element={<Home />} />
            <Route path="/breakingBad/about" element={<About />} />
            <Route path="/breakingBad/characters" element={<Characters />} />
            <Route path="/breakingBad/seasons" element={<Season />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
