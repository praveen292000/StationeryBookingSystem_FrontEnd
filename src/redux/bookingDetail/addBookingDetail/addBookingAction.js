import { addBookingRequest } from "../../../services/BookingDetailService";
import { Empty_Cart_Action } from "../../Cart/productToCart/productToCartAction";
import { addBookingConstant } from "./addBookingConstant";

export const addBookingStart = () => ({
  type: addBookingConstant.Start,
  payload: undefined,
  error: undefined,
});

export const addBookingSuccess = (data) => ({
  type: addBookingConstant.Success,
  payload: data,
  error: undefined,
});

export const addBookingFailure = (error) => ({
  type: addBookingConstant.Failure,
  payload: undefined,
  error: error,
});

export const addBookingThunk = (customerId) => {
  return (dispatch) => {
    const objAction = addBookingStart();
    dispatch(objAction);
    const promise = addBookingRequest(customerId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = addBookingSuccess(response.data);
        dispatch(objActionSuccess);
        dispatch(Empty_Cart_Action());
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = addBookingFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};
