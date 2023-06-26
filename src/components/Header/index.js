import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import {
  getColor,
  getContentMaxWidth,
  getContentPadding,
  getTransitionDuration,
} from '../../styles/themeGetters';
import { HeaderNavLink } from './components/HeaderNavLink';

const StyledHeader = styled.header`
  background-color: ${getColor('light')};
  ${({ isSticky }) =>
    isSticky &&
    css`
      box-shadow: 0px 6px 26px rgba(0, 0, 0, 0.07);
    `}
  padding: ${getContentPadding()} 0;
  position: sticky;
  top: 0;
  transition: box-shadow ${getTransitionDuration()} ease-in-out;
  z-index: 5;
`;

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${getContentMaxWidth()};
`;

const HeaderTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
`;

const HeaderNav = styled.nav``;

const HeaderNavList = styled.ul`
  flex-direction: row;
  margin: 0;
  padding: 0;
  display: flex;
`;

const HeaderNavListItem = styled.li`
  list-style: none;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(document.documentElement.scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <StyledHeader isSticky={isSticky}>
      <HeaderWrapper>
        <HeaderTitle>Your next watch</HeaderTitle>
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavListItem>
              <HeaderNavLink to="/">Home</HeaderNavLink>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavLink to="/favorites">My favorites</HeaderNavLink>
            </HeaderNavListItem>
          </HeaderNavList>
        </HeaderNav>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export { Header };
