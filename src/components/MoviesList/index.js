import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getBorderRadius } from '../../styles/themeGetters';
import { MovieCard } from './components/MovieCard';

const StyledMoviesList = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;
`;

const MoviesListItem = styled.li`
  border-radius: ${getBorderRadius('default')};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.07);
  height: 320px;
  list-style: none;
`;

const MoviesList = ({ movies }) => (
  <StyledMoviesList>
    {Object.entries(movies).map(([_, movie]) => {
      return (
        <MoviesListItem key={movie.id}>
          <MovieCard movie={movie} />
        </MoviesListItem>
      );
    })}
  </StyledMoviesList>
);

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export { MoviesList };
