## Resources

- [IMDb API](https://imdb-api.com/)
- [ToDo App UI by Alex Arutuynov](https://dribbble.com/shots/14100356-ToDo-App-UI)
- [Feather Icons](https://feathericons.com/)
- [Single Element CSS Spinners](https://projects.lukehaas.me/css-loaders/)
- [Smooth Shadow](https://shadows.brumm.af/)
- [React Router docs on custom links](https://reactrouter.com/docs/en/v6/examples/custom-link)
- [styled-components docs on animations](https://styled-components.com/docs/basics#animations)
- [Nomensa's blog](https://www.nomensa.com/blog/how-improve-web-accessibility-hiding-elements)
- [MDN docs on CSS line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp#examples)
- [Testing Library docs](https://testing-library.com/)

## Decisions taken

- IMDb-API: ease of use
- API key stored in `.env.local` file
- Movie data stored in `localStorage` to avoid exceeding the API call limit
- `react-query` to get movies data
- `zustand` to manage favorites and search global state
- Search stored in global state to keep search results when navigating to the favorites page
