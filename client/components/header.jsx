import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {
  Link,
  animateScroll as scroll
} from 'react-scroll';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOpen: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isToggledOpen: !this.state.isToggledOpen });
  }

  render() {
    const offset = window.innerWidth < 768 ? -268 : -86;
    return (
      <>
        <Container fluid={true} className="py-3 sticky-top">
          <Navbar expand="md" color="faded" className="py-0">
            <NavbarToggler onClick={this.handleToggle} navbar="true" />
            <Collapse isOpen={this.state.isToggledOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    About Me
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Skills
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="tools"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Tools
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="applications"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Applications
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;
