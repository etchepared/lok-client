import axios from "axios";
import { TYPES } from "./types.js";

export function getReviews(id) {
  return function (dispatch) {
    return axios
      .get(`/reviews/${id}`)
      .then((response) => {
        return dispatch({
          type: TYPES.GET_REVIEWS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function postReviews(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post("/reviews", payload);

      return dispatch({
        type: TYPES.POST_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function putReviews(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.put("/reviews", payload);

      return dispatch({
        type: TYPES.PUT_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
