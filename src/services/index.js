// import { AxiosRequestConfig } from 'axios';
import request from '@/utils/request';
import api from './api';

const apiPrefix = import.meta.env.VITE_BASE_URL; //线上地址
console.log('apiPrefix: ', apiPrefix);

const gen = params => {
  console.log('params: ', params);
  let url = apiPrefix + params;
  let method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0];
    url = apiPrefix + paramsArray[1];
  }

  return function (data, config) {
    console.log('data: ', data);
    return request({
      url,
      data,
      method,
      ...config,
    });
  };
};


const APIFunction = {};
for (const key of Object.keys(api)) {
  APIFunction[key] = gen(api[key]);
}

export default APIFunction;
