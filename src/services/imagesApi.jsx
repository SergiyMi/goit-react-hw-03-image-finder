const URL = 'https://pixabay.com/api/';
const KEY = 'key=14462661-6a591cd8dedfbd6803de54cb4';
const PER_PAGE = 'per_page=12';

export const fetchImages = (query = '', pageNumber = 0) => {
  return fetch(`${URL}?${KEY}&q=${query}&page=${pageNumber}&${PER_PAGE}`)
    .then(res => res.json())
    .then(data => data.hits);
};
