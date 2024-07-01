import axios from "axios";
import { backUrl } from "../../constants";

const instance = axios.create({
  baseURL: `${backUrl}`,
});

instance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    // config.headers["Accept"] = "application/json";
    // config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
