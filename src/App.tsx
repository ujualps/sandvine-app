import React, { useContext, useEffect } from "react";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/SideNav";
import { AnalyticsPage } from "Container/AnalyticsPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SideNavContext } from "context/SideNavContext";
import { SideNavContextProvider } from "context/SideNavContext";
import "./App.scss";
import { useCurrentNavTab } from "hooks/useCurrentNavTab";

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
        <AnalyticsPage />
      </Route>
      <Route>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

const Render = () => {
  const { setActiveInfo, activeInfo } = useContext(SideNavContext);
  const activeTab = useCurrentNavTab();

  useEffect(() => {
    setActiveInfo(activeTab?.key);
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app-main-wrapper">
        <SideNav />
        <Routes />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename="sandvine">
      <SideNavContextProvider>
        <Render />
      </SideNavContextProvider>
    </BrowserRouter>
  );
}

export default App;
