import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>

		<NavLink to='/header' activeClassName="active-link" style={{color: 'white' , fontWeight: "bold"}}>
			<h1>AXIS BANK</h1> 
		</NavLink>

		
        


		<NavLink to='/about' activeClassName="active-link">
			About
		</NavLink>
		<NavLink to='/events' activeClassName="active-link">
			Events
		</NavLink>
		<NavLink to='/annual' activeClassName="active-link">
			Annual Report
		</NavLink>
		<NavLink to='/team' activeClassName="active-link">
			Teams
		</NavLink>
		<NavLink to='/blogs' activeClassName="active-link">
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeClassName="active-link">
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
