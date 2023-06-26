export const getEndpointUrl = (endpoint) =>
  `${endpoint}/${process.env.REACT_APP_API_KEY}`;
