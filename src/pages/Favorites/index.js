import React from 'react';
import styled from 'styled-components';

import { EmptyState } from '../../components/EmptyState';
import { MoviesList } from '../../components/MoviesList';
import { selectFavorites, useFavorites } from '../../store/favorites';

const Section = styled.section``;

const Favorites = () => {
  const favorites = useFavorites(selectFavorites);

  if (!Object.keys(favorites).length) {
    return <EmptyState message="You do not have any favorite movie yet" />;
  }

  return (
    <Section>
      <MoviesList movies={favorites} />
    </Section>
  );
};

export { Favorites };
