<<<<<<< HEAD
import React from "react"
import "./Sidebar.css"
import { SidebarData } from "./SidebarData"
import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import line from "../Images/line.png"

export default function Sidebar() {
  return (
    <section collapseOnSelect className="Sidebar">
      <Navbar expand="md" className="SidebarNavbar">
        <Container className="SidebarMenu">
          <Navbar.Toggle
            className="SideNavbar-toggler"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className="SidebarNav-Collapse"
            id="basic-navbar-nav"
          >
            <Nav className="SidebarList me-auto flex-column">
              {SidebarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={item.cName}
                    id={window.location.pathname === item.path ? "active" : ""}
                    onClick={() => (window.location.pathname = item.path)}
                  >
                    <Nav.Link className="SideNav-link" to={item.path}>
                      <span className="Sidebar-title">{item.title}</span>
                      <div className="Sidebar-icon">{item.icon}</div>
                    </Nav.Link>
                    <img
                      className="SidebarImage d-inline-block align-bottom"
                      src={line}
                      alt="React Bootstrap logo"
                    />
                  </li>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  )
=======
import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import line from "../Images/line.png";
import LogoPhotopedia from "./LogoPhotopedia";
import { NavLink } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <section collapseOnSelect className="Sidebar">
        <Navbar expand="md" className="SidebarNavbar">
          <LogoPhotopedia className="NavLogo" />
          <Container className="SidebarMenu">
            <Navbar.Toggle
              className="SideNavbar-toggler"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              className="SidebarNav-Collapse"
              id="basic-navbar-nav"
            >
              <Nav className="SidebarList me-auto flex-column">
                {SidebarData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={item.cName}
                      id={
                        window.location.pathname === item.path ? "active" : ""
                      }
                      onClick={() => (window.location.pathname = item.path)}
                    >
                      <NavLink className="SideNav-link" to={item.path}>
                        <span className="Sidebar-title">{item.title}</span>
                        <div className="Sidebar-icon">{item.icon}</div>
                      </NavLink>
                      <img
                        className="SidebarImage d-inline-block align-bottom"
                        src={line}
                        alt="React Bootstrap logo"
                      />
                    </li>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
>>>>>>> router/leaflet
}

/*
import LogoPhotopedia from "./LogoPhotopedia"
   <LogoPhotopedia className="NavLogo" />

   */
