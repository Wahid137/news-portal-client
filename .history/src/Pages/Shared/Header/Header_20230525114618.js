import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Button, Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import LeftSideNav from "../LeftSideNav/LeftSideNav";



const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect className="mb-2" expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><Link to="/">News Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className="d-flex align-items-center me-2">{user?.displayName}</span>
                                        <Button variant="outline-dark">Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Button variant="outline-dark" className="me-2"><Link className="text-decoration-none text-dark" to="/login">Login</Link></Button>
                                        <Button variant="outline-dark"><Link className="text-decoration-none text-dark" to="/register">Register</Link></Button>

                                    </>

                            }
                            <Link to="/profile">
                                {user?.photoURL ?
                                    <Image
                                        className="ms-2"
                                        style={{ height: '60px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
                                }
                            </Link>
                        </>
                    </Nav>
                    <div className="d-lg-none">
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;