import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/cscwt_logo.svg';
// import { GridContainerBasic, GridElement, NavContainer, NavElement, NavLogo } from '../../StyledComponents';
import * as Styled from '../../StyledComponents';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuElements: [
        'home',
        'blog',
        'projects',
        'tanzania',
        'about',
        'contact'
      ],
      renderedMenuElements: null
    };
  }
  renderMenu = menuElements => {
    console.log('bin rendermenu');
    return menuElements.map((el, index) => (
      <Styled.GridElementCentered gridColumn={index + 2} gridRow={1}>
        <Styled.NavLink>{el}</Styled.NavLink>
      </Styled.GridElementCentered>
    ));
  };
  render() {
    const renderedMenuElements = this.renderMenu(this.state.menuElements);
    return (
      <Styled.Header>
        <Styled.GridContainerBasic numberOfRows={1} numberOfColumns={15}>
          <Styled.NavLogo gridColumn={1} gridRow={1} />
          {renderedMenuElements}
        </Styled.GridContainerBasic>
      </Styled.Header>
    );
  }
}

export default Header;
