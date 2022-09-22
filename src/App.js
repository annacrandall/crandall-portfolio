import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar"; 
import Drumkit from "./pages/Drumkit";
import Calculator from "./pages/Calculator"; 
import Markdown from "./pages/Markdown"; 
import Quotes from "./pages/Quotes"; 
import Pomodoro from "./pages/Pomodoro";
import NoPage from "./pages/NoPage"; 
import Home from "./pages/Home"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/drumkit" element={<Drumkit />} /> 
        <Route path="/quotes" element={<Quotes />} /> 
        <Route path="/calculator" element={<Calculator />} /> 
        <Route path="/pomodoro" element={<Pomodoro />} /> 
        <Route path="/markdown" element={<Markdown />} /> 
        <Route path="/*" element={<NoPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
