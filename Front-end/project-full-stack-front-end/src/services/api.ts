import axios from "axios";

export const api = axios.create({
  baseURL: "https://project-full-stack-z1q3.onrender.com",
  timeout: 20000,
});
