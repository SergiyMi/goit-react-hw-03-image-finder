const URL = 'https://pixabay.com/api/';
const KEY = 'key=14462661-6a591cd8dedfbd6803de54cb4';
// const PER_PAGE = 'per_page=12';&${PER_PAGE}

export const fetchImages = (query = '', pageNumber = 1) => {
  return fetch(`${URL}?${KEY}q=${query}&page=${pageNumber}`)
    .then(res => res.json())
    .then(data => console.log(data.hits));
};
