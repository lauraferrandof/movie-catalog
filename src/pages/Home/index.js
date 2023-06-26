import React from 'react';
import styled from 'styled-components';

import { EmptyState } from '../../components/EmptyState';
import { ErrorState } from '../../components/ErrorState';
import { LoadingState } from '../../components/LoadingState';
import { MoviesList } from '../../components/MoviesList';
import { SearchMovieForm } from '../../components/SearchMovieForm';

import { useMoviesQuery } from '../../services/api/useMoviesQuery';
import { selectSearchValue, useSearch } from '../../store/search';
import { getColor } from '../../styles/themeGetters';

import { MESSAGES } from './constants';

const Section = styled.section``;

const SectionTitle = styled.h2`
  color: ${getColor('greyDark')};
  text-align: center;
`;

const Home = () => {
  const searchValue = useSearch(selectSearchValue);
  const { data, status } = useMoviesQuery();

  if (status === 'error') {
    return <ErrorState message={MESSAGES.error} />;
  }

  const titleText = searchValue
    ? `Results for "${searchValue}"`
    : 'Top 100 Movies';

  return (
    <>
      <Section>
        <SearchMovieForm />
      </Section>
      <Section>
        <SectionTitle>{titleText}</SectionTitle>
        {status === 'loading' ? (
          <LoadingState />
        ) : Object.keys(data).length ? (
          <MoviesList movies={data} />
        ) : (
          <EmptyState message={MESSAGES.empty} />
        )}
      </Section>
    </>
  );
};

export { Home };
