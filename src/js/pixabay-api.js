const API_KEY = '45436364-f90a0cfe5f9b13d8d0e95a311';
const BASE_URL = 'https://pixabay.com';

export const fetchPhotos = searchedQuery => {
  const searchUrlParams = new URLSearchParams({
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    key: API_KEY,
  });

  return fetch(`${BASE_URL}/api/?${searchUrlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};