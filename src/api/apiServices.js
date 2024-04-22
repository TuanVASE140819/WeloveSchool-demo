// src/api/apiServices.js
import API from "./index";



//  Register 
export const registerUser = async (data) => {
  try {
    const response = await API.post("/api/v1/Account/register", data);
    return response.data;
  } catch (error) {
    // console.error("Error registering user:", error);
  }
};
export const loginUser = async (data) => {
  try {
    const response = await API.post("/api/v1/Login/loginweb", data);
    return response.data;
  } catch (error) {
    // console.error("Error logging in user:", error);
  }
};


export const fetchData = async () => {
  try {
    const response = await API.get("/path-to-resource");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// thêm các hàm khác cho POST, PUT, DELETE...

export const postData = async (data) => {
  try {
    const response = await API.post("/path-to-resource", data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export const putData = async (data) => {
  try {
    const response = await API.put("/path-to-resource", data);
    return response.data;
  } catch (error) {
    console.error("Error putting data:", error);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await API.delete(`/path-to-resource/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
