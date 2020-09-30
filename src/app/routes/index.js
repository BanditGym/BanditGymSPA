import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../../util/asyncComponent";
import { withRouter } from "react-router";
import AdminDashboard from "./Admin_Dashboard";
import BanditGym from "./BanditGym";

const Routes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/admin-dashboard`} component={AdminDashboard} />
    <Route path={`${match.url}/bandit-gym`} component={BanditGym} />
  </Switch>
);

export default withRouter(Routes);
