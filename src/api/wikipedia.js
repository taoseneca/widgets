import axios from 'axios';

const wikipedia = axios.create({
  params: {
    action: 'query',
    list: '',
    origin: '*',
    format: 'json',
  },
});

export default wikipedia;
