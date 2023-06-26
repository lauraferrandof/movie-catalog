import React from 'react';
import PropTypes from 'prop-types';

import { EmptyState } from '../EmptyState';
import errorImage from './media/error.png';

const ErrorState = ({ message }) => (
  <EmptyState image={errorImage} message={message} />
);

ErrorState.propTypes = {
  message: PropTypes.string.isRequired,
};

export { ErrorState };
