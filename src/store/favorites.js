import create from 'zustand';

import { filterMoviesById } from '../utils/filterMoviesById';

export const useFavorites = create((set) => ({
  favorites: {},
  setFavorites: (payload) =>
    set((state) => {
      if (state.favorites[payload.id]) {
        return {
          ...state,
          favorites: filterMoviesById(state.favorites, payload.id),
        };
      }
      return {
        ...state,
        favorites: { ...state.favorites, [payload.id]: payload },
      };
    }),
}));

export const selectFavorites = (state) => state.favorites;

export const selectSetFavorites = (state) => state.setFavorites;
