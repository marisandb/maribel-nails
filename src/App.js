import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import Policies from "./components/Policies"


function App() {
  return (
   <>
    <Header />
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/gallery' exact element={<Gallery/>} />
        <Route path='/policies' exact element={<Policies/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;