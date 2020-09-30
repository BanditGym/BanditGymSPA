import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const AdminDashboard = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Route
        path={`${match.url}/ProductMetrics`}
        component={asyncComponent(() => import("./routes/ProductMetrics"))}
      />
    </Switch>
  </div>
);

export default AdminDashboard;
