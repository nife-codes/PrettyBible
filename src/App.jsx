import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Bible from './pages/Bible';
import Notes from './pages/Notes';
import Quotes from './pages/Quotes';
import Wallpapers from './pages/Wallpapers';
import Settings from './pages/Settings';
import Dictionary from './pages/Dictionary';
import About from './pages/About';
import Layout from './layouts/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bible" element={<Bible />} />
          <Route path="notes" element={<Notes />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="wallpapers" element={<Wallpapers />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
