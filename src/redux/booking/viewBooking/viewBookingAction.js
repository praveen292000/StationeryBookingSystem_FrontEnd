import { viewOrderByIdRequest } from "../../../services/BookingService";
import { viewBookingConstant } from "./viewBookingConstant";

export const viewOrderStart = () => ({
  type: viewBookingConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewOrderSuccess = (data) => ({
  type: viewBookingConstant.Success,
  payload: data,
  error: undefined,
});

export const viewOrderFailure = (error) => ({
  type: viewBookingConstant.Failure,
  payload: undefined,
  error: error,
});

export const viewOrderThunk = (data) => {
  return (dispatch) => {
    const objAction = viewOrderStart();
    dispatch(objAction);
    const orderId=data.orderId;
    const promise = viewOrderByIdRequest(orderId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = viewOrderSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = viewOrderFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};