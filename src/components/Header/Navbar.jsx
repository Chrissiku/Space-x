/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import routes from "../../assets/routes";

const NavMenu = () => (
  <Nav className="nav-link">
    {routes.map(({ path, name }) => (
      <Nav.Link key={path}>
        <NavLink
          className="App-link"
          activeClassName="App-active-link"
          exact
          to={path}
        >
          {name}
        </NavLink>
      </Nav.Link>
    ))}
  </Nav>
);

export default NavMenu;
