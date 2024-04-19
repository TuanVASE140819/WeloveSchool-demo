// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://your-api-url.com",
  timeout: 1000,
  // headers: {'Authorization': 'Bearer yourAuthToken'} // nếu cần
});

export default API;
