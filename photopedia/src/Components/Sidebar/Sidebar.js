import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import line from "../Images/line.png";
import { NavLink as RouterLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
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
                      id={
                        window.location.pathname === item.path ? "active" : ""
                      }
                    >
                      <RouterLink className="SideNav-link" to={item.path}>
                        <span className="Sidebar-title">{item.title}</span>
                        <div className="Sidebar-icon">{item.icon}</div>
                      </RouterLink>
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
}

/*
import LogoPhotopedia from "./LogoPhotopedia"
   <LogoPhotopedia className="NavLogo" />

   */
