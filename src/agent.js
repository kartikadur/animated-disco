import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api';

const requests = {
  get: url => axios.get(url).then(res => res.data),
};

const Articles = {
  all: page => requests.get('/articles?limit=10'),
};


export default {
  Articles,
};