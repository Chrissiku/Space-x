/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import Navbar from "react-bootstrap/Navbar";
import Logo from "./logo";
import NavMenu from "./Navbar";

function Header() {
  return (
    <Navbar className="navbar">
      <Logo />
      <NavMenu />
    </Navbar>
  );
}

export default Header;
