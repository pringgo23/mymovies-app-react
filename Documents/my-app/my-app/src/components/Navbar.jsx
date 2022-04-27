import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../styles/Navbar.css";

// start import logo
import logoAlterra from "../images/logo-alterra.png";
// end import logo

export default class NavbarComponent extends Component {
  state = {
    NavbarName: "My App",
    imgSrc:
      "https://www.alterra.id/wp-content/themes/alterra-wp/assets/revamp/img/logo_nav@2x.png",
    classLogo: "img-logo-alterra",
    currentPage: "Home",
  };

  render() {
    return (
      <Navbar className="px-5" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            className={this.state.classLogo}
            src={logoAlterra}
            alt="alterra-logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={this.state.currentPage === "Home" ? "active-nav" : ""}
              onClick={() => {
                this.setState({
                  currentPage: "Home",
                });

                this.props.currentPage("Home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                this.state.currentPage === "Detail" ? "active-nav" : ""
              }
              onClick={() => {
                this.setState({
                  currentPage: "Detail",
                });

                this.props.currentPage("Detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              className={
                this.state.currentPage === "Favorite" ? "active-nav" : ""
              }
              onClick={() => {
                this.setState({
                  currentPage: "Favorite",
                });

                this.props.currentPage("Favorite");
              }}
            >
              Favorite
            </Nav.Link>
          </Nav>

          <Button
            onClick={() => {
              console.log(this.setState);
            }}
          >
            Check
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
