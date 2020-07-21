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
            <div className="brand-content">
              <div className="CompanyName">Sports Inc.</div>
              <img
                className="logo"
                src="https://i.postimg.cc/L6Q45VT9/ogo-story-volkswagen.jpg"
                alt=""
              />
            </div>
          </Link>
        </ReactBootstrap.Navbar.Brand>

        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="nav-selection">
            <ReactBootstrap.Nav.Link>
              <Link to="Login">Login</Link>
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link>
              <Link to="Register">Register</Link>
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown
              title="Shop Now !"
              id="collasible-nav-dropdown"
            >
              <div className="dropdown-links">
                <ReactBootstrap.NavDropdown.Item>
                  <Link to="Rugby">Rugby Equipment</Link>
                </ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item>
                  <Link to="Cricket">Cricket Equipment</Link>
                </ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item>
                  <Link to="Soccer">Soccer Equipment</Link>
                </ReactBootstrap.NavDropdown.Item>
              </div>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
};

export default Navbar;
