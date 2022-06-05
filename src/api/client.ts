import axios from 'axios';

// 모든 요청에 설정을 하지 않기 위해 instance생성
const client = axios.create();
/*

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
*/
client.defaults.baseURL = 'https://www.robinjoon.xyz/api/';

export default client;
