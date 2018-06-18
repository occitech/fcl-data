import axios from "axios";

import { app_key } from "../../../../config.js";

export default {
  loadData: () =>
    axios
      .get(
        `https://diffuseur.datatourisme.gouv.fr/webservice/1532da3f576cd29193bb2d309f339e39/${app_key}`
      )
      .then(response => {
        console.log("app_key", app_key);
        return response.data.results[0];
      })
};
