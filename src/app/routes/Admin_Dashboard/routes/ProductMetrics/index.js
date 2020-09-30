import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import ChartCard from "components/dashboard/Common/ChartCard";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import CustomLineChart from "components/CustomLineChart/index";
import DoughnutChart from "components/dashboard/eCommerce/DoughnutChart";
import ReactSpeedometer from "react-d3-speedometer";
// import SalesStatistic from "components/dashboard/eCommerce/SalesStatistic";
import DeviceUsage from "components/dashboard/eCommerce/DeviceUsage";
import MarketingTable from "components/dashboard/Common/MarketingTable";
import OrderTable from "components/dashboard/eCommerce/OrderTable";

// DUMMY DATA
import { signUpData, marketingData } from "./data";

const ProductMetrics = (props) => {
  const [anchorEl, setanchorEl] = useState();
  const [menuState, setMenuState] = useState(false);

  const onOptionMenuSelect = (event) => {
    setMenuState(true);
    setanchorEl(event.currentTarget);
  };

  const handleRequestClose = () => {
    setMenuState(false);
  };
  return (
    <div className="dashboard animated slideInUpTiny animation-duration-3">
      <ContainerHeader
        match={props.match}
        title={<IntlMessages id="pages.adminDashboard.productMetrics" />}
      />

      <div className="row">
        <div className="col-xl-3 col-md-4 col-sm-6 col-12 order-xl-2">
          <div className="jr-card jr-card-equalheight">
            <ChartCard styleName="bg-gradient-primary text-white">
              <div className="chart-title">
                <h2 className="mb-1">FIREBASE_PLACEHOLD_USERSIGNUP_AMOUNT</h2>
                <p>
                  <IntlMessages id="adminDashboard.onlineSignups" />
                </p>
              </div>

              <ResponsiveContainer width="100%" height={110}>
                <CustomLineChart
                  chartData={signUpData.chartData}
                  labels={signUpData.labels}
                  borderColor="#FFF"
                  pointBorderColor="#FFF"
                  pointBackgroundColor="#FF9800"
                  pointBorderWidth={2}
                  pointRadius={4}
                  lineTension={0}
                />
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6 col-12 order-xl-4">
          <div className="jr-card jr-card-equalheight">
            <div className="jr-card-header">
              <h3 className="card-heading">
                <IntlMessages id="adminDashboard.siteTraffic" />
              </h3>
            </div>
            <div className="jr-card-body">
              {/* TODO: TRACK SITE AND USER TRAFFIC */}
              <ResponsiveContainer className="responsive-chart" width="100%">
                <div
                  className="d-flex justify-content-center"
                  style={{ width: "100%", height: "200px" }}
                >
                  <ReactSpeedometer
                    value={333}
                    fluidWidth
                    needleHeightRatio={0.4}
                    ringWidth={40}
                    segments={4}
                    needleTransitionDuration={4000}
                    needleTransition="easeElastic"
                  />
                </div>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
              <h4 className="mb-1">FIREBASE_ACTIVE_USERS_CURRENTLY</h4>
              <p className="card-text">FIREBASE_TRAFFIC_LEVELS</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6 col-12 order-xl-6">
          <div className="jr-card jr-card-equalheight">
            <div className="jr-card-header">
              <h3 className="card-heading">
                <IntlMessages id="adminDashboard.application" />
              </h3>
            </div>
            {/* TODO: ADD FIREBASE USER PLATFORM RECORDING AND ANALYTICS */}
            <div className="jr-card-body">
              <ResponsiveContainer width="100%">
                <DoughnutChart />
              </ResponsiveContainer>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="media">
                  <i className="zmdi zmdi-android zmdi-hc-fw mr-2 text-success" />
                  <div className="media-body">
                    <h5 className="mb-0">Android</h5>
                    <span className="jr-fs-sm text-muted">
                      FIREBASE_USER_PLATFORM_AMOUNT_ANDRIOD
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="media">
                  <i className="zmdi zmdi-apple zmdi-hc-fw mr-2 text-warning" />
                  <div className="media-body">
                    <h5 className="mb-0">iOS</h5>
                    <span className="jr-fs-sm text-muted">
                      FIREBASE_USER_PLATFORM_AMOUNT_IOS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8 col-12">
          <div className="jr-card">
            <div className="jr-card-header d-flex align-items-center">
              <div className="mr-auto">
                <h3 className="d-inline-block mb-0">
                  <IntlMessages id="table.recentOrders" />
                </h3>
                <span className="text-white badge badge-success">
                  <IntlMessages id="table.thisWeek" />
                </span>
              </div>
              <IconButton className="icon-btn" onClick={onOptionMenuSelect}>
                <i className="zmdi zmdi-chevron-down" />
              </IconButton>
            </div>
            <OrderTable />
          </div>
        </div>
        <div className="col-xl-4 col-12">
          <div className="jr-card jr-full-card">
            <div className="jr-card-header d-flex align-items-center mb-3">
              <h3 className="card-heading mb-0">
                <i className="zmdi zmdi-chart-donut zmdi-hc-fw text-primary text-lighten-2 mr-2" />
                <IntlMessages id="adminDashboard.marketingDisplay" />
              </h3>
              <span className="badge badge-primary ml-auto">Today</span>
            </div>
            <div className="mt-n3">
              {<MarketingTable data={marketingData} />}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12 col-12">
          <div className="jr-card">
            <div className="jr-card-header d-flex align-items-center">
              <div className="mr-auto">
                <h3 className="d-inline-block mb-0">
                  <IntlMessages id="adminDashboard.currentUsersUsingDevice" />
                </h3>
                <span className="text-white badge badge-success">
                  <IntlMessages id="adminDashboard.currentUserThisWeek" />
                </span>
              </div>
              <IconButton className="icon-btn" onClick={onOptionMenuSelect}>
                <i className="zmdi zmdi-chevron-down" />
              </IconButton>
            </div>
            <DeviceUsage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMetrics;
