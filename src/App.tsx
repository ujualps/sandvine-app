import React from "react";
import logo from "./logo.svg";
import { Header } from "./Components/Header";
import "./App.scss";
import { SideNav } from "./Components/SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-main-wrapper">
        <SideNav />
        {/* <FontAwesomeIcon icon="fa-camera-security" /> */}
      </div>
    </div>
  );
}

export default App;
