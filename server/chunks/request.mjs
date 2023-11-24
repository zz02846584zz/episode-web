import axios from 'axios';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';

const config = useRuntimeConfig();
const request = axios.create({
  baseURL: config.public.apiBase,
  timeout: 5e3
});
request.interceptors.request.use(
  (req) => {
    return req;
  }
);
request.interceptors.response.use(
  async (response) => {
    return response.data;
  },
  (error) => {
    var _a, _b;
    return Promise.reject((_b = (_a = error == null ? void 0 : error.response) == null ? void 0 : _a.data) != null ? _b : error);
  }
);
const request$1 = request;

export { request$1 as r };
//# sourceMappingURL=request.mjs.map
