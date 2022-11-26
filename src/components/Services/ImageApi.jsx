const API_KEY = '30843123-cf65eced721c119970e40006a';
const params = 'image_type=photo&orientation=horizontal';

export const fetchImages = (searchRequest, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchRequest}&key=${API_KEY}&${params}&page=${page}&per_page=12`
  )
    
};
