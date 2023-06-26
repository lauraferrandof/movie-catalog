import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import {
  selectSearchValue,
  selectSetSearchValue,
  useSearch,
} from '../../store/search';
import {
  getBorderRadius,
  getColor,
  getContentPadding,
  getTransitionDuration,
} from '../../styles/themeGetters';

import { ReactComponent as SearchIcon } from './media/search.svg';
import { ReactComponent as XIcon } from './media/x.svg';

const StyledSearchMovieForm = styled.form`
  padding: ${getContentPadding()} 0;
`;

const SearchMovieFormLabel = styled.label`
  // visually hidden: https://www.nomensa.com/blog/how-improve-web-accessibility-hiding-elements
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const SearchMovieFormInputWrapper = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled(SearchIcon)`
  left: 294px;
  position: absolute;
  stroke: ${getColor('greyDark')};
  top: 50%;
  transform: translateY(-50%);
  transition: stroke ${getTransitionDuration()} ease-in-out;
`;

const SearchMovieFormInput = styled.input`
  border-radius: ${getBorderRadius('default')};
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
  color: ${getColor('dark')};
  display: block;
  margin: 0 auto;
  padding: 20px 50px;
  transition: box-shadow ${getTransitionDuration()} ease-in-out;
  width: 350px;

  &::placeholder {
    color: ${getColor('greyLight')};
  }

  &:focus-visible {
    box-shadow: 0px 8px 15px rgba(160, 86, 197, 0.25);
    outline: none;
  }
`;

const SearchMovieFormClearButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  height: 24px;
  justify-content: center;
  padding: 0;
  position: absolute;
  right: 294px;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color ${getTransitionDuration()} ease-in-out;
  width: 24px;

  &:hover {
    background-color: ${lighten(0.1, '#b8b5cc')};
  }
`;

const StyledXIcon = styled(XIcon)`
  height: 18px;
  stroke: ${getColor('greyDark')};
  width: 18px;
`;

const SearchMovieForm = () => {
  const searchValue = useSearch(selectSearchValue);
  const setSearchValue = useSearch(selectSetSearchValue);
  const [value, setValue] = useState(searchValue);

  const handleInputChange = (e) => setValue(e.currentTarget.value);

  const handleFormSubmit = (e, value) => {
    e.preventDefault();
    setSearchValue(value);
  };

  const handleClearButton = () => {
    setValue('');
    setSearchValue('');
  };

  return (
    <StyledSearchMovieForm onSubmit={(e) => handleFormSubmit(e, value)}>
      <SearchMovieFormLabel htmlFor="movieFilter">
        Search movie
      </SearchMovieFormLabel>
      <SearchMovieFormInputWrapper>
        <StyledSearchIcon />
        <SearchMovieFormInput
          id="movieFilter"
          name="movieFilter"
          onChange={handleInputChange}
          placeholder="The Matrix"
          type="text"
          value={value}
        />
        {value && (
          <SearchMovieFormClearButton
            aria-label="Clear"
            onClick={handleClearButton}
            type="button"
          >
            <StyledXIcon aria-label="X icon" />
          </SearchMovieFormClearButton>
        )}
      </SearchMovieFormInputWrapper>
    </StyledSearchMovieForm>
  );
};

export { SearchMovieForm };
