// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://apiweloveschool20240421134825.azurewebsites.net/",
  timeout: 1000,
  // headers: {'Authorization': 'Bearer yourAuthToken'} // nếu cần
});

export default API;
