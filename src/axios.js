import axios from "axios";

// Base url to make request to th movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
