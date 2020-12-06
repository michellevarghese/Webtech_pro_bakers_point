import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions';

/**
* @author
* @function Header
**/

const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }


    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout} >Sign Out</span>
                </li>
            </Nav>
        );
    }

    const renderNonLoggedInLinks = () => {
        return (
            <Nav>
                {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
                <li className="nav-item">
                    <NavLink to="signin" className="nav-link" >Sign In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="signup" className="nav-link" >Sign Up</NavLink>
                </li>
            </Nav>
        );
    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light" style={{ zIndex: 1 }}>
            <Container fluid>
                {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                <Link to="/" className="navbar-brand" style={{ color:"#d35d6e", fontWeight: "bold" }}>Bakers' Profile</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header
