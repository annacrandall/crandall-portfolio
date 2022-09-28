import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar"; 
//import Drumkit from "./pages/Drumkit";
import Calculator from "./pages/Calculator"; 
import Markdown from "./pages/Markdown"; 
import Quotes from "./pages/Quotes"; 
import Pomodoro from "./pages/Pomodoro";
import NoPage from "./pages/NoPage"; 
import Home from "./pages/Home"


const App = () => {
  const Drumkit = () => {
    window.location.href('https://google.com')
  }
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/*" element={<NoPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
