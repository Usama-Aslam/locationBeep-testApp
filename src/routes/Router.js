import React from "react";
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import Login from "../screens/Login";
import Map from "../screens/Map";

const Routes = props => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
