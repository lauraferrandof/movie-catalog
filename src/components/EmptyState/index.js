import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import emptyImage from './media/empty.png';

const EmptyStateWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const EmptyStateImage = styled.img`
  height: 400px;
  width: 400px;
`;

const EmptyStateMessage = styled.p`
  margin: 0;
`;

const EmptyState = ({ image, message }) => (
  <EmptyStateWrapper>
    <EmptyStateImage src={image} />
    <EmptyStateMessage>{message}</EmptyStateMessage>
  </EmptyStateWrapper>
);

EmptyState.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string.isRequired,
};

EmptyState.defaultProps = {
  image: emptyImage,
};

export { EmptyState };
