import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavbarText } from "reactstrap";

function NavbarComponent() {
  return (
    <div>
      <Navbar className="bg" expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <b>Notebook</b>
          </NavbarBrand>
          <Nav className="mr-auto" navbar></Nav>
          <NavbarText>
            <NavLink href="/favorites">
              <b>Favorites</b>
            </NavLink>
          </NavbarText>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
