import { updateOrderRequest } from "../../../services/BookingService";
import { updateBookingConstant } from "./updateBookingConstant";

export const updateOrderStart = () => ({
  type: updateBookingConstant.Start,
  payload: undefined,
  error: undefined,
});

export const updateOrderSuccess = (data) => ({
  type: updateBookingConstant.Success,
  payload: data,
  error: undefined,
});

export const updateOrderFailure = (error) => ({
  type: updateBookingConstant.Failure,
  payload: undefined,
  error: error,
});

export const updateOrderThunk = (data) => {
  return (dispatch) => {
    const objAction = updateOrderStart();
    dispatch(objAction);
    const promise = updateOrderRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = updateOrderSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = updateOrderFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};