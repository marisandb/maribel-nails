import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Policies from "./components/Policies"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={About} />
        <Route path='/contact' element={Contact} />
        <Route path='/gallery' element={Gallery} />
        <Route path='/policies' element={Policies} />
      </Routes>
    </Router>
  );
}

export default App;