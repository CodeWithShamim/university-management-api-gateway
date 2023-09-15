import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HttpService = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config) => config,
    (error) => error
  );

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );

  return instance;
};

const AuthService = HttpService(config.auth_service_url);
const CoreService = HttpService(config.core_service_url);

export { HttpService, AuthService, CoreService };
