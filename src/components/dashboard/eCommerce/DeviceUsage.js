import React from "react";
import DeviceUsageCell from "./DeviceUsageCell";
import {
  FETCH_COLLECTION,
  FETCH_SUBCOLLECTION,
} from "../../../firebase/firebaseData";

const DeviceUsage = () => {
  const [data, loading, error] = FETCH_COLLECTION("users"); // Fetch the User Database
  //const [selectedDoc] = FETCH_DOC("workoutHistory", "YnYOjQPbmti9TMYItEpv");
  const [selectedSubCol] = FETCH_SUBCOLLECTION(
    "workoutHistory",
    "YnYOjQPbmti9TMYItEpv",
    "09-28-2020"
  );
  console.log(selectedSubCol);
  return (
    <div className="table-responsive-material">
      <table className="default-table table-unbordered table table-sm table-hover">
        <thead className="th-border-b">
          <tr>
            <th>User ID</th>
            <th>User</th>
            <th>Last Workout Date</th>
            <th>Workout Frequency</th>
            <th>Top Workouts</th>
            <th>Bandit Device</th>
            <th>Platform</th>
            <th className="status-cell text-right">Device Usage</th>
            <th>Bandit Profile Level</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return <DeviceUsageCell key={data.id} data={data} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceUsage;
