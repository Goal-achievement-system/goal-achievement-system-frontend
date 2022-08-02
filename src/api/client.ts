import axios, { AxiosRequestConfig } from 'axios';

// 모든 요청에 설정을 하지 않기 위해 instance생성
const client = axios.create();

client.defaults.baseURL = 'https://www.robinjoon.xyz:4134/api/';

export default client;
