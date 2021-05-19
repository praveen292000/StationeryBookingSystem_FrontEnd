import { viewBookingByIdRequest } from "../../../services/BookingDetailService";
import { viewBookingConstant } from "./viewBookingConstant";

export const viewBookingStart = () => ({
  type: viewBookingConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewBookingSuccess = (data) => ({
  type: viewBookingConstant.Success,
  payload: data,
  error: undefined,
});

export const viewBookingFailure = (error) => ({
  type: viewBookingConstant.Failure,
  payload: undefined,
  error: error,
});

export const viewBookingThunk = (data) => {
  return (dispatch) => {
    const objAction = viewBookingStart();
    dispatch(objAction);
    const bookingId=data.bookingId;
    const promise = viewBookingByIdRequest(bookingId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = viewBookingSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = viewBookingFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};
