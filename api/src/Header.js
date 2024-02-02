import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function Header() { 
    return  (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Coment">Coment</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Post">Post</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Photo">Photo</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Todo">Todo</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Albums">Albums</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/User">User</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
 }
 export default Header;