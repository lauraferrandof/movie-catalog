export const getBorderRadius =
  (borderRadius) =>
  ({ theme }) =>
    theme.borderRadius[borderRadius];

export const getColor =
  (color) =>
  ({ theme }) =>
    theme.colors[color];

export const getContentMaxWidth =
  () =>
  ({ theme }) =>
    theme.contentMaxWidth;

export const getContentPadding =
  () =>
  ({ theme }) =>
    theme.contentPadding;

export const getTransitionDuration =
  () =>
  ({ theme }) =>
    theme.transitionDuration;
