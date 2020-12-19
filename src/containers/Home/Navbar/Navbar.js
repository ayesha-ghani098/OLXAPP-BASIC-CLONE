import React, { Component } from "react";
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
import { BrowserRouter as Router } from "react-router-dom";

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
          <MDBNavbarToggler
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={this.toggleCollapse}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem style={{ marginRight: "10px" }}>
                <MDBDropdown>
                  <MDBDropdownToggle style={{ color: "black" }} nav caret>
                    <div
                      style={{ color: "black",fontWeight:"500", marginRight: "10px" }}
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
