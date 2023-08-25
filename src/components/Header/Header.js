/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo';
import NavMenu from './Navbar';

function Header() {
  return (
    <Navbar className="flex flex-col  justify-between items-center w-full gap-[5px] border-b-[1px] border-[#b4b1af] md:flex-row">
      <Logo />
      <NavMenu />
    </Navbar>
  );
}

export default Header;
