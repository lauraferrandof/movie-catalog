import React from 'react';
import PropTypes from 'prop-types';
import {
  Link as RouterLink,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import styled, { css } from 'styled-components';

import {
  getColor,
  getTransitionDuration,
} from '../../../../styles/themeGetters';

const StyledLink = styled(RouterLink)`
  color: ${({ $active }) => ($active ? getColor('primary') : getColor('dark'))};
  ${({ $active }) =>
    $active &&
    css`
      pointer-events: none;
    `}
  position: relative;
  text-decoration: none;
  transition: color ${getTransitionDuration()} ease-in-out;

  &:hover {
    color: ${getColor('primary')};
  }

  &::before {
    background-color: ${getColor('primary')};
    bottom: 0;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transition: width ${getTransitionDuration()}
      cubic-bezier(0.1, 0.79, 0.24, 0.93);
    width: 0;
  }

  &:hover::before {
    width: 100%;
  }
`;

const HeaderNavLink = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink $active={match} to={to}>
      {children}
    </StyledLink>
  );
};

HeaderNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export { HeaderNavLink };
