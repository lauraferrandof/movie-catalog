export const transformAndNormalizeData = (data) => {
  return Object.fromEntries(
    data.map(({ id, imDbRating, image, title, year }) => [
      id,
      {
        id,
        image,
        rating: imDbRating,
        title,
        year,
      },
    ])
  );
};
