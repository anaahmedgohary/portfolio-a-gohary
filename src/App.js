import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Landing from "./landing";
import Contact from "./contact";
import Projectslinks from "./projectslinks";
import ReviewApp from './components/review-app/reviewApp';
import Footer from './components/footer/footer';



const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projectslinks />} />
          <Route path="/review-app" element={<ReviewApp />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
