import axios from "axios";
import { TYPES } from "./types.js";

export function getProducts() {
  return function (dispatch) {
    return axios
      .get("/products")
      .then((response) =>
        dispatch({
          type: TYPES.GET_PRODUCTS,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function searchProducts(search) {
  return function (dispatch) {
    return dispatch({
      type: TYPES.GET_PRODUCTS_BY_NAME,
      payload: search,
    });
  };
}

export function detailsProduct(id) {
  return function (dispatch) {
    return axios
      .get(`/products/${id}`)
      .then((response) => {
        return dispatch({
          type: TYPES.PRODUCT_DETAILS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

// Post new Product: Admin
export function postProducts(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post("/products", payload);

      return dispatch({
        type: TYPES.POST_PRODUCTS_ADM,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllCarts() {
  return async function (dispatch) {
    const json = await axios.get(`/carts`);
    return dispatch({
      type: TYPES.GET_ALL_CARTS,
      payload: json.data,
    });
  };
}

export function getUserCart(email) {
  return async function (dispatch) {
    let cart = await axios.get(`/cart/${email}`);
    return dispatch({
      type: TYPES.GET_USER_CART,
      payload: cart.data,
    });
  };
}

export function addToCart(CartId, productInfo) {
  return async function (dispatch) {
    const addProd = await axios.put(`/cart/${CartId}`, productInfo); //fatlta autenci usuario
    return dispatch({
      type: TYPES.ADD_TO_CART,
      payload: addProd.data.productCart,
    });
  };
}

export function deleteProductCart(CartId, ProductId) {
  return async function (dispatch) {
    let deleted = await axios.delete(
      `/cart?CartId=${CartId}&ProductId=${ProductId}`
    );
    return dispatch({
      type: TYPES.DELETE_PRODUCT_CART,
      payload: deleted.info,
    });
  };
}

export function deleteAllCart(CartId) {
  return async function (dispatch) {
    let deleted = await axios.delete(`/cart/${CartId}`);
    return dispatch({
      type: TYPES.DELETE_ALL_CART,
      payload: deleted.info,
    });
  };
}

export function updateProductAdm(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.put("/products", payload);

      return dispatch({
        type: TYPES.UPDATE_PRODUCT_ADM,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cartToBuy(CartId, infoBuy, infoUser) {
  return async function (dispatch) {
    try {
      const buy = await axios.post(`/order/${CartId}`, {
        infoBuy,
        infoUser,
      });
      return dispatch({
        type: TYPES.CART_TO_BUY,
        payload: buy.data,
      });
    } catch (error) {}
  };
}
