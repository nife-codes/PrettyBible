import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>PrettyBible</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bible" element={<Bible />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <div>Home Page</div>;
}

function Bible() {
  return <div>Bible Page</div>;
}

function Notes() {
  return <div>Notes Page</div>;
}

function Quotes() {
  return <div>Quotes Page</div>;
}

function Wallpapers() {
  return <div>Wallpapers Page</div>;
}

function Settings() {
  return <div>Settings Page</div>;
}

function Dictionary() {
  return <div>Dictionary Page</div>;
}

function About() {
  return <div>About Page</div>;
}

export default App;
