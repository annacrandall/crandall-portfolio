import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar"; 
import NoPage from "./pages/NoPage"; 
import Home from "./pages/Home"

const RedirectUrl = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <h1 className="text-center">Redirecting...</h1>;
};

const App = () => {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/drumkit" element={<RedirectUrl url="https://crandall-drumkit.netlify.app" />} />
        <Route exact path="/calculator" element={<RedirectUrl url="https://crandall-calculator.netlify.app" />} />
        <Route exact path="/pomodoro" element={<RedirectUrl url="https://crandall-pomodoro-timer.netlify.app" />} />
        <Route exact path="/quotes" element={<RedirectUrl url="https://breaking-bad-quote-gen.netlify.app" />} />
        <Route exact path="/markdown" element={<RedirectUrl url="https://crandall-markdown-previewer.netlify.app" />}/>
        <Route path="/*" element={<NoPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
