import { updateBookingRequest } from "../../../services/BookingDetailService";
import { updateBookingConstant } from "./updateBookingConstant";

export const updateBookingStart = () => ({
  type: updateBookingConstant.Start,
  payload: undefined,
  error: undefined,
});

export const updateBookingSuccess = (data) => ({
  type: updateBookingConstant.Success,
  payload: data,
  error: undefined,
});

export const updateBookingFailure = (error) => ({
  type: updateBookingConstant.Failure,
  payload: undefined,
  error: error,
});

export const updateBookingThunk = (data) => {
  return (dispatch) => {
    const objAction = updateBookingStart();
    dispatch(objAction);
    const promise = updateBookingRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = updateBookingSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = updateBookingFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};
