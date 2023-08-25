/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import routes from "../../assets/routes";

const NavMenu = () => (
	<Nav className='flex justify-between items-center gap-[20px] '>
		{routes.map(({ path, name }) => (
			<NavLink key={path} className={({ isActive }) => (isActive ? 'text-lg underline underline-offset-2 text-blue-700 transition-all' : 'text-lg no-underline text-blue-700 transition-all-[0.3s]')} exact='true' to={path}>
				{name}
			</NavLink>
		))}
	</Nav>
)

export default NavMenu;
