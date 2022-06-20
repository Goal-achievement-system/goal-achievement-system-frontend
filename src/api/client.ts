import axios from 'axios';

// 모든 요청에 설정을 하지 않기 위해 instance생성
const client = axios.create();

client.defaults.baseURL = 'https://www.robinjoon.xyz/api/';

export default client;
