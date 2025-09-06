import axios from "axios";

// Change this to your backend URL
const API = axios.create({
  baseURL: "https://betahouseproject-backend.onrender.com/api",
});

//The above i changed from "http://localhost:5000/api", so it will make the frontend connext to my deployed backend on Render instead of my local host devp. serer 

// This is to attach the token (for the protected routes like add/edit/delete property)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
