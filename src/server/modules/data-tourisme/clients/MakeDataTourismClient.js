import axios from "axios";

const MakeDataTourismClient = axios.create({
  baseURL: "https://data.datatourisme.gouv.fr/",
  timeout: 1000000
});

export default MakeDataTourismClient;
