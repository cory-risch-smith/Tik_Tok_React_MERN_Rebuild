import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backendmern.herokuapp.com/",
});

export default instance;
