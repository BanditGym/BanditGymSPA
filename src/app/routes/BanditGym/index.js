import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const BanditGym = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Route
        path={`${match.url}/MyProfile`}
        component={asyncComponent(() => import("./routes/UserProfile"))}
      />
      <Route
        path={`${match.url}/Home`}
        component={asyncComponent(() => import("./routes/Home"))}
      />
    </Switch>
  </div>
);

export default BanditGym;
