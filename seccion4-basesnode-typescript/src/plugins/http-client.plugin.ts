//const axios = require("axios");
import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
    // const resp = await fetch( url );
    // return await resp.json();
  },

  //no usar any en la vida real
  post: async (url: string, body: any) => {},
  put: async (url: string, body: any) => {},
  delete: async (url: string, body: any) => {},
};
