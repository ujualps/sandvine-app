import React, { useContext, useEffect } from "react";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/SideNav";
import { AnalyticsPage } from "Container/AnalyticsPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SideNavContext } from "context/SideNavContext";
import { SideNavContextProvider } from "context/SideNavContext";
import "./App.scss";
import { useCurrentNavTab } from "hooks/useCurrentNavTab";
import { navigation } from "config/navigation";

const Routes = () => {
  const { setActiveInfo, activeInfo } = useContext(SideNavContext);
  const activeTab = useCurrentNavTab();

  useEffect(() => {
    setActiveInfo(activeTab?.key);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeInfoDesc = navigation.find((i) => i.key === activeInfo)?.desc;

  return (
    <Switch>
      <Route exact path="/home">
        <div>
          Home<p>Active Accordian is : {activeInfoDesc}</p>
        </div>
      </Route>
      <Route exact path="/profile">
        <div>
          Profile<p>Active Accordian is : {activeInfoDesc}</p>
        </div>
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

function App() {
  return (
    <BrowserRouter basename="sandvine">
      <SideNavContextProvider>
        <div className="app">
          <Header />
          <div className="app-main-wrapper">
            <SideNav />
            <Routes />
          </div>
        </div>
      </SideNavContextProvider>
    </BrowserRouter>
  );
}

export default App;
