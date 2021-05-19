import {
  increaseQuantityRequest,
  reduceQuantityRequest,
} from "../../../services/CartService";
import { productToCartConstant } from "./productToCartConstant";

export const productToCartStart = () => ({
  type: productToCartConstant.Start,
  payload: undefined,
  error: undefined,
});

export const productToCartSuccess = (data) => ({
  type: productToCartConstant.Success,
  payload: data,
  error: undefined,
});

export const productToCartFailure = (error) => ({
  type: productToCartConstant.Failure,
  payload: undefined,
  error: error,
});

export const productToCartStartReduce = () => ({
  type: productToCartConstant.Start_Reduce,
  payload: undefined,
  error: undefined,
});

export const productToCartSuccessReduce = (data) => ({
  type: productToCartConstant.Success_Reduce,
  payload: data,
  error: undefined,
});

export const productToCartFailureReduce = (error) => ({
  type: productToCartConstant.Failure_Reduce,
  payload: undefined,
  error: error,
});

export const Empty_Cart_Action = () => ({
  type: productToCartConstant.Empty_Cart,
  payload: undefined,
  error: undefined,
});

export const productToCartIncreaseThunk = (data) => {
  return (dispatch) => {
    const objAction = productToCartStart();
    dispatch(objAction);
    const promise = increaseQuantityRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = productToCartSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = productToCartFailure(error.response.data);
        dispatch(objActionFailure);
      });
  };
};

export const productToCartReduceThunk = (data) => {
  return (dispatch) => {
    const objAction = productToCartStartReduce();
    dispatch(objAction);
    const promise = reduceQuantityRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = productToCartSuccessReduce(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = productToCartFailureReduce(error.message);
        dispatch(objActionFailure);
      });
  };
};
