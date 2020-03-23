import React from "react";
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import Login from "../screens/Login";
import Map from "../screens/MapScreen";

const Routes = props => {
  return (
    <div>
      <BrowserRouter>
        {/* <Switch>
        </Switch> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/map" component={Map} />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
