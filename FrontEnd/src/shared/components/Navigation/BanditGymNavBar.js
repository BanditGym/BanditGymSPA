import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Twitter, Facebook, YouTube, Instagram } from "@material-ui/icons";

import "./BanditGymNavBar.css";

class BanditGymNavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar
                className="color-nav"
                variant="dark"
                expand="lg"
                sticky="top"
              >
                <Navbar.Brand href="#home">
                  <img
                    src="/logo.png"
                    width="180"
                    height="40"
                    className="d-inline-block align-top"
                    alt=""
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Contact Us</Nav.Link>
                    <Nav.Link href="/">Shop</Nav.Link>
                    <Nav.Link href="/">Profile</Nav.Link>
                    <NavDropdown title="Community" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Community Home
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Achievements
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Leaderboards
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Community About
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav className="mr-right">
                    <Nav.Link>
                      <Facebook />
                    </Nav.Link>
                    <Nav.Link>
                      <Twitter />
                    </Nav.Link>
                    <Nav.Link>
                      <Instagram />
                    </Nav.Link>
                    <Nav.Link>
                      <YouTube />
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/"></Route>
                <Route path="/"></Route>
                <Route path="/"></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default BanditGymNavBar;
