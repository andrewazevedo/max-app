import { create } from 'apisauce';

export default create({
  baseURL: 'http://developer.goibibo.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
