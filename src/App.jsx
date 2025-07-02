import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="wrapper box-border flex flex-col">
      <nav className="w-full h-16 bg-green-700 flex justify-center items-center px-4 fixed top-0 z-50 select-none">
        <div className="nav-wrapper font-size-navbar container text-white w-full flex flex-col justify-between">
          <div className="hamburger md:hidden">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="w-full font-size-footer bg-gray-800 text-white p-4 text-center grow-0 shrink-0">
        <p>&copy; {year} DreamWeavers Devs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
