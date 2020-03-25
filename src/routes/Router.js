import React from "react";
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import { useSelector } from "react-redux";

import Login from "../screens/Login";
import Map from "../screens/MapScreen";

const Routes = props => {
  const user = useSelector(state => state.authReducer.user);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Map} authDetail={user} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const PrivateRoute = ({ component: Component, authDetail, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authDetail ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default Routes;
