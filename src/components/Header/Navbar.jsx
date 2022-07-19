/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import routes from "../../assets/routes";

const NavMenu = () => (
  <Nav className="nav-link">
    {routes.map(({ path, name }) => (
      <NavLink
        key={path}
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
        exact
        to={path}
      >
        {name}
      </NavLink>
    ))}
  </Nav>
);

export default NavMenu;
