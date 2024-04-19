import axios from 'axios';

export async function getCars(page: number) {
  return axios.get(`http://127.0.0.1:3000/garage/?_limit=7&_page=${page}`);
}

export default { getCars };
