import { viewBookingByCustomerIdRequest} from "../../../services/BookingService";
import { viewBookingByCustomerIdConstant } from "./viewBookingByCustomerConstant";

export const viewBookingByCustomerStart = () => ({
  type: viewBookingByCustomerIdConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewBookingByCustomerSuccess = (data) => ({
  type: viewBookingByCustomerIdConstant.Success,
  payload: data,
  error: undefined,
});

export const viewBookingByCustomerFailure = (error) => ({
  type: viewBookingByCustomerIdConstant.Failure,
  payload: undefined,
  error: error,
});

export const viewBookingByCustomerThunk = (customerId) => {
  return (dispatch) => {
    const objAction = viewBookingByCustomerStart();
    dispatch(objAction);
    const promise = viewBookingByCustomerIdRequest(customerId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = viewBookingByCustomerSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = viewBookingByCustomerFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};