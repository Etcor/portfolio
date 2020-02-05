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
    return (
      <React.Fragment>
        <Container fluid={true} className="py-3 bg-dark sticky-top">
          <Navbar color="faded" dark></Navbar>
        </Container>
      </React.Fragment>
    );
  }
}

export default Header;
