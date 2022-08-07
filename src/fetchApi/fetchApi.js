import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '6205723-a701a2b99407455c76c95e325';
export const fetchApi = (search, page) => {
  return axios.get(
    `api/?key=${API_KEY}&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
