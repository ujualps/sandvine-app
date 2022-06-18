import React from "react";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/SideNav";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <div>Home</div>
      </Route>
      <Route exact path="/profile">
        <div>Profile</div>
      </Route>
      <Route exact path="/analytics">
        <div>Analytics</div>
      </Route>
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="sandvine">
        <Header />
        <div className="app-main-wrapper">
          <SideNav />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
