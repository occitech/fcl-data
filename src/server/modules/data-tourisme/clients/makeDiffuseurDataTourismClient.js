import axios from "axios";

const makeDiffuseurDataTourismClient = axios.create({
  baseURL: "https://diffuseur.datatourisme.gouv.fr",
  timeout: 5000000
});

export default makeDiffuseurDataTourismClient;
