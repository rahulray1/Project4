import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function AppHeader() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-header">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          TechieBoom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Align links to the right */}
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#aboutus" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#works" className="nav-link">
              Works
            </Nav.Link>
            <Nav.Link href="#team" className="nav-link">
              Team
            </Nav.Link>
            <Nav.Link href="#testimonials" className="nav-link">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-link">
              Pricing
            </Nav.Link>
            <Nav.Link href="#blog" className="nav-link">
              Blog
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
