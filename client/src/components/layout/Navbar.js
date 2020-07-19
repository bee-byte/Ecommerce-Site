import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootstrap.Navbar.Brand>
          <Link to="Ecommerce-site">
            Sports Inc.
            <img
              className="logo"
              src="https://i.postimg.cc/L6Q45VT9/ogo-story-volkswagen.jpg"
              alt=""
            />
          </Link>
        </ReactBootstrap.Navbar.Brand>

        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="nav-selection">
            <ReactBootstrap.Nav.Link href="#Login">
              Login
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#Register">
              Register
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown
              title="Shop Now !"
              id="collasible-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="#Product1">
                Rugby Equipment
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#Product2">
                Cricket Equipment
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#Product3">
                Soccer Equipment
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
};

export default Navbar;
