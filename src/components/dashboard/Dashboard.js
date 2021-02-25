import React, { useState, useEffect, useRef } from "react";
import {
  useAnalyticsApi,
  useAuthorize,
  useDataChart,
  useSignOut,
  useViewSelector,
} from "react-use-analytics-api";
// react-bootstrap components
import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import "./style.css";
import { useSelector } from "react-redux";

function Dashboard() {
  // const { ready, gapi, authorized, error } = useAnalyticsApi();
  const view = useSelector((state) => state.view);
  console.log("viewww", view);

  // const [viewId, setViewId] = useState();

  // useEffect(() => {
  //   setViewId(view);
  // }, [view]);

  // const viewSelectorContainerId1 = "view-selector-container1";
  // const viewSelectorContainerId2 = "view-selector-container2";

  // useViewSelector(
  //   authorized ? gapi : undefined,
  //   viewSelectorContainerId1,
  //   (viewId) => setViewId(viewId)
  // );
  // useViewSelector(
  //   authorized ? gapi : undefined,
  //   viewSelectorContainerId2,
  //   (viewId) => setViewId(viewId)
  // );

  // const query = {
  //   ids: viewId,
  //   "start-date": "30daysAgo",
  //   "end-date": "today",
  //   metrics: "ga:sessions",
  //   dimensions: "ga:date",
  // };
  // const chart = {
  //   container: "data-chart-container1",
  //   type: "LINE",
  //   options: {
  //     title: "Sessions (20 Days)",
  //   },
  // };
  // const query2 = {
  //   ids: viewId,
  //   "start-date": "30daysAgo",
  //   "end-date": "today",
  //   metrics: "ga:users",
  //   dimensions: "ga:userType",
  // };

  // const chart2 = {
  //   container: "data-chart-container2",
  //   type: "PIE",
  //   options: {
  //     title: "Users (30 Days)",
  //   },
  // };

  // useDataChart(authorized ? gapi : undefined, query, chart);
  // useDataChart(authorized ? gapi : undefined, query2, chart2);

  // const authDiv = useRef(null);
  // const [authorizeCalled, setAuthorizeCalled] = useState(false);
  // const hasAuthElements =
  //   authDiv.current && authDiv?.current?.children?.length > 0;

  // const authorize = useAuthorize(gapi, {
  //   clientId:
  //     "256529246232-m2jn6rivk1vvsv8cuo692m0dqn4ukc6k.apps.googleusercontent.com",
  //   container: "authorize-container-id",
  // });

  // useEffect(() => {
  //   if (ready && !error && !authorizeCalled) {
  //     authorize();
  //     setAuthorizeCalled(true);
  //   }
  // }, [ready, error, authorizeCalled, authorize]);

  return (
    <div id="page-content-wrapper">
      {/* <div className="container-fluid">
        <Row>
          <Col md="auto">
            <Card style={{ width: "40rem" }}>
              <Card.Header>
                <Card.Title as="h4">Sessions</Card.Title>
                <p className="card-category">20 days</p>
              </Card.Header>
              <Card.Body>
                <div
                  style={{ height: "75vh" }}
                  className="container valign-wrapper"
                > */}
      {/* <div className="row">
                    <div className="col s12 center-align">
                      <div>
                        {!ready && <div>Loading...</div>}
                        {ready && (
                          <div>
                            {authorized && (
                              <div>
                                <div className="container">
                                  <div
                                    className="data-chart"
                                    id="data-chart-container1"
                                  /> */}
      {/* <div
                                    id={viewSelectorContainerId1}
                                    className="data-chart"
                                  /> */}
      {/* </div>
                              </div>
                            )}
                            {!authorized && (
                              <div>
                                <div
                                  ref={authDiv}
                                  id="authorize-container-id"
                                ></div>
                                {!hasAuthElements && (
                                  <div>🔄 Refresh the page to sign in.</div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        {error && <div>{error.toString()}</div>}
                      </div>
                    </div>
                  </div> */}
      {/* </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col> */}
      {/* <Col md="auto">
            <Card style={{ width: "35rem" }}>
              <Card.Header>
                <Card.Title as="h4">Users Statistics</Card.Title>
                <p className="card-category">New and Returning</p>
              </Card.Header>
              <Card.Body>
                <div className="data-chart" id="data-chart-container2" />
                {/* <div id={viewSelectorContainerId2} /> */}
      {/* </Card.Body>
            </Card>
          </Col>
        </Row>
      </div> */}
    </div>
  );
}
export default Dashboard;
