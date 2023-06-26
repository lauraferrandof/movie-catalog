export const filterMoviesById = (movies, id) =>
  Object.fromEntries(
    Object.entries(movies).filter(([_, movie]) => movie.id !== id)
  );
