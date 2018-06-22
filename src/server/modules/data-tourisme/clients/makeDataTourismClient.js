import axios from "axios";

const makeDataTourismClient = axios.create({
  baseURL: "https://data.datatourisme.gouv.fr/",
  timeout: 1000000
});

export default makeDataTourismClient;
