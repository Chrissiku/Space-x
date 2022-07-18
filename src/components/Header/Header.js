/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand className="brand">
        <img
          src="https://user-images.githubusercontent.com/101924220/179498899-67ed3078-c059-42c0-8175-57ed7ec93c58.png"
          width="70"
          height="70"
          alt="space-x logo"
        />
        <span>Space Travelers&apos; Hub</span>
      </Navbar.Brand>
      <Nav className="nav-link">
        <Nav.Link className="link active">Rockets</Nav.Link>
        <Nav.Link className="link">Missions</Nav.Link>
        <Nav.Link className="link">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
