import { Container, Navbar, Nav, Button } from "react-bootstrap";
import SearchBar from "../Molecules/SearchBar";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-primary fs-3">Sports Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
          </Nav>
          <SearchBar />
          <div className="d-flex gap-3 ms-3">
            <Button variant="outline-primary" className="position-relative">
              <i className="bi bi-person" style={{fontSize: '1.25rem'}}></i>
            </Button>
            <Button variant="primary" className="position-relative">
              <i className="bi bi-cart" style={{fontSize: '1.25rem'}}></i>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
