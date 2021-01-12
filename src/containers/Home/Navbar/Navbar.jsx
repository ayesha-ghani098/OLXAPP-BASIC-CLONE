import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './navbar.css';
import  {VscMenu} from 'react-icons/vsc'

// ------installed & imported Navbar from MDB-------//

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";

// ------Navbar Compoenent-------//

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          className="navbar no-gutters"
          expand="md"
          style={{ marginBottom: "-5px" }}
        >
          {/* <MDBNavbarToggler
           className="toggle"
            onClick={this.toggleCollapse}
          /> */}
    <div className="navbar-mob">
      <marquee width="90%" direction="right" height="auto">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore lab
</marquee>
            <VscMenu className="toggle"  onClick={this.toggleCollapse} />
    </div>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem style={{ marginRight: "10px" }}>
                <MDBDropdown>
                  <MDBDropdownToggle style={{ color: "black" }} nav caret>
                    <div
                      style={{
                        color: "black",
                        fontWeight: "500",
                        marginRight: "10px",
                      }}
                      className="d-none d-md-inline"
                    >
                      All Categories
                    </div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem active>
                <MDBNavLink style={{ color: "black" }} to="#!">
                  Mobile Phones
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{ color: "black" }} to="#!">
                  Cars
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{ color: "black" }} to="#!">
                  Motocycles
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{ color: "black" }} to="#!">
                  Houses
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{ color: "black" }} to="#!">
                  Tablets
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{ color: "black" }} to="#!">
                  TV-Video-Audio
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink style={{ color: "black" }} to="#!">
                  Tablets
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
