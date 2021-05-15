import { addOrderRequest } from "../../../services/BookingService";
import { Empty_Cart_Action } from "../../Cart/ProductsToCart/ProductsToCartAction";
import { addBookingConstant } from "./addBookingConstant";

export const addOrderStart = () => ({
  type: addBookingConstant.Start,
  payload: undefined,
  error: undefined,
});

export const addOrderSuccess = (data) => ({
  type: addBookingConstant.Success,
  payload: data,
  error: undefined,
});

export const addOrderFailure = (error) => ({
  type: addBookingConstant.Failure,
  payload: undefined,
  error: error,
});

export const addOrderThunk = (customerId) => {
  return (dispatch) => {
    const objAction = addOrderStart();
    dispatch(objAction);
    const promise = addOrderRequest(customerId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = addOrderSuccess(response.data);
        dispatch(objActionSuccess);
        dispatch(Empty_Cart_Action());
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = addOrderFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};