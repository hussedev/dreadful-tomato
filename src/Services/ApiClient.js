import axios from 'axios';

const DATA_URL = 'https://gitlab.com/-/snippets/2041384/raw/master/data.json';

export const getMockedData = () => {
  return fetch('./data.json')
    .then((res) => res.json())
    .catch((err) => console.log(`${err.message} while fetching data.json`));
};

export const getData = () => {
  return axios
    .get(DATA_URL)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.data)
    .catch((err) => {
      console.log(`${err.message} while fetching ${DATA_URL}`);
    });
};
