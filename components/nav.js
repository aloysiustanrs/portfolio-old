import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/nav.module.css";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" className={styles.nav}>
      <Navbar.Brand className={styles.navName} href="/">
        ALOYSIUS TAN
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={styles.navToggler}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
          <Nav.Link className={styles.navLinks} href="/#project-header">
            Projects
          </Nav.Link>
          <Nav.Link className={styles.navLinks} href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className={styles.navLinks} href="#link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
