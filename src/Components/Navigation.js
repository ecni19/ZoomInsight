import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import Lectures from './Lectures';
import Upload from './Upload';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/home">ZoomInsight</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/home">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/lectures">
                <Nav.Link href="#lectures">Lectures</Nav.Link>
              </Link>
              <Link to="/upload">
                <Nav.Link href="#upload">Upload</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/lectures">
          <Lectures/>
        </Route>
        <Route exact path="/upload">
          <Upload/>
        </Route>
      </Switch>
    </Router>
  ); 
}

export default Navigation;
