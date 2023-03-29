import axios from "axios";
import { TYPES } from "./types.js";

export function getPromos() {
  return async function (dispatch) {
    try {
      const info = await axios.get("/promos");
      return dispatch({
        type: TYPES.GET_PROMOS,
        payload: info.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const addPromo = async (payload) => {
  return axios
    .post("/promos", payload)
    .then(function (response) {})
    .catch(function (error) {});
};

export const putPromo = async (payload) => {
  return axios
    .put("/promos", payload)
    .then(function (response) {})
    .catch(function (error) {});
};
