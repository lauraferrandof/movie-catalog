import create from 'zustand';

export const useSearch = create((set) => ({
  searchValue: '',
  setSearchValue: (payload) => set({ searchValue: payload }),
}));

export const selectSearchValue = (state) => state.searchValue;

export const selectSetSearchValue = (state) => state.setSearchValue;
