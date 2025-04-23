import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="app-layout">
      <header className="navbar">
        <h2 className="logo">PrettyBible 💖</h2>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/bible">Bible</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/quotes">Quotes</NavLink>
          <NavLink to="/wallpapers">Wallpapers</NavLink>
          <NavLink to="/dictionary">Dictionary</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
