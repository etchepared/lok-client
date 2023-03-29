import axios from "axios";
import { TYPES } from "./types";

export function orderAdmin() {
  return function (dispatch) {
    return axios
      .get("/ordersAdmin")
      .then((response) =>
        dispatch({
          type: TYPES.ORDER_ADMIN,
          payload: response.data,
        })
      )
      .catch((err) => console.log(err));
  };
}
