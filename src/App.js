import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar"; 
import NoPage from "./pages/NoPage"; 
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"; 


const App = () => {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/*" element={<NoPage />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
