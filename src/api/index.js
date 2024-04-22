// src/api/index.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://apiweloveschool20240421134825.azurewebsites.net/",
});

// Set the Authorization header for all requests
API.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export default API;
