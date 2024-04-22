import axios from 'axios';
import Api from './constants/api';

export async function getCars(page: number) {
  return axios.get(`${Api.HOST_URL}/garage/?_limit=7&_page=${page}`);
}

export async function getWinners(page: number, sort?: string, order?: string) {
  return axios.get(
    `${Api.HOST_URL}/winners?_limit=10&_page=${page}&_sort=${sort}&_order=${order}`
  );
}
