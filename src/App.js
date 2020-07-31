import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import UserLayouttRoute from "./Layouts/UserLayout";
import DashboardLayoutRoute from "./Layouts/DashboardLayout";

import UserPage from "./Pages/UserPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/layout1" />
      </Route>
      <UserLayouttRoute path="/layout1" Component={UserPage} />
      <DashboardLayoutRoute path="/layout2" Component={UserPage} />
    </Switch>
  );
};

export default App;
