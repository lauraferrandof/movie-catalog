import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  getBorderRadius,
  getColor,
  getTransitionDuration,
} from '../../../../styles/themeGetters';
import {
  selectFavorites,
  selectSetFavorites,
  useFavorites,
} from '../../../../store/favorites';

import { ReactComponent as HeartIcon } from './media/heart.svg';
import { ReactComponent as StarIcon } from './media/star.svg';

const MovieArticle = styled.article`
  height: 100%;
  position: relative;
  width: 100%;
`;

const MovieImage = styled.img`
  border-radius: ${getBorderRadius('default')};
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const MovieImageOverlay = styled.div`
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  border-radius: ${getBorderRadius('default')};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color ${getTransitionDuration()} ease-in-out;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const MovieLikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 35px;
  opacity: 0;
  padding: 0;
  transition: opacity ${getTransitionDuration()} ease-in-out;
  width: 35px;

  ${MovieImageOverlay}:hover & {
    opacity: 1;
  }
`;

const StyledHeartIcon = styled(HeartIcon)`
  fill: ${({ $isFavorite }) =>
    $isFavorite ? getColor('primary') : 'transparent'};
  height: 100%;
  stroke: ${getColor('primary')};
  transition: fill ${getTransitionDuration()} ease-in-out;
  width: 100%;

  &:hover {
    fill: ${getColor('primary')};
  }
`;

const MovieDataWrapper = styled.div`
  bottom: 0;
  left: 0;
  padding: 15px;
  position: absolute;
  width: 100%;
`;

const MovieTitle = styled.h3`
  color: ${getColor('white')};
  font-size: 18px;
  margin: 0 0 5px;

  // line-clamp: https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp#examples
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const MovieMetadataWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const MovieMetadata = styled.span`
  color: ${({ highlight }) =>
    highlight ? getColor('white') : getColor('greyLight')};
  font-size: 16px;
`;

const StyledStarIcon = styled(StarIcon)`
  fill: ${getColor('white')};
  height: 20px;
  margin: 0 5px 0 auto;
  stroke: ${getColor('white')};
  width: 16px;
`;

const MovieCard = ({ movie }) => {
  const { id, image, rating, title, year } = movie;
  const favorites = useFavorites(selectFavorites);
  const setFavorites = useFavorites(selectSetFavorites);
  const [isFavorite, setIsFavorite] = useState(!!favorites[id]);

  const handleLikeButton = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
    setFavorites(movie);
  };

  return (
    <MovieArticle>
      <MovieImage alt={title} src={image} />
      <MovieImageOverlay>
        <MovieLikeButton aria-label="Like" onClick={handleLikeButton}>
          <StyledHeartIcon aria-label="Heart icon" $isFavorite={isFavorite} />
        </MovieLikeButton>
      </MovieImageOverlay>
      <MovieDataWrapper>
        <MovieTitle>{title}</MovieTitle>
        <MovieMetadataWrapper>
          <MovieMetadata>{year}</MovieMetadata>
          <StyledStarIcon />
          <MovieMetadata highlight>{rating || '0'}</MovieMetadata>
        </MovieMetadataWrapper>
      </MovieDataWrapper>
    </MovieArticle>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export { MovieCard };
