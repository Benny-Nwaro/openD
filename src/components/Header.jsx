import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { BrowserRouter, Link,  Route, Routes } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import Home from "./Home";
import Details from "./UserGallery";




function Header() {

  return (
    <BrowserRouter forceRefresh={true}>
      <div className="app-root-1">
        <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
          <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
            <div className="header-left-4"></div>
            <img className="header-logo-11" src={logo} />
            <div className="header-vertical-9"></div>
            <Link to="/">
              <h5 className="Typography-root header-logo-text">vendApp</h5>
            </Link>
            <div className="header-empty-6"></div>
            <div className="header-space-8"></div>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/discover">Discover</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/minter">Upload</Link>
            </button>
            <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
              <Link to="/collection">My movies</Link>
            </button>
          </div>
        </header>
      </div>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/discover" Component={Gallery}/>
        <Route path="/minter" Component={Minter} />
        <Route path="/collection" Component={Details}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
