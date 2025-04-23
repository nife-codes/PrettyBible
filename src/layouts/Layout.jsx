import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css"; // we'll create this in a bit

const Layout = () => {
  return (
    <div className="app-layout">
      <header className="navbar">
        <h2 className="logo">PrettyBible 💖</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/bible">Bible</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/quotes">Quotes</Link>
          <Link to="/wallpapers">Wallpapers</Link>
          <Link to="/dictionary">Dictionary</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
