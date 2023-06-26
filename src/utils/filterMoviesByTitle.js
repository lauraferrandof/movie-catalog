export const filterMoviesByTitle = (movies, searchValue) =>
  Object.fromEntries(
    Object.entries(movies).filter(([_, movie]) =>
      movie.title.toLowerCase().includes(searchValue.trim().toLowerCase())
    )
  );
