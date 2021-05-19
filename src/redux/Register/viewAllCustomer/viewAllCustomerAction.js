import { viewAllCustomerRequest } from "../../../services/customerService";
import { viewAllCustomerConstant } from "./viewAllCustomerConstant";

export const viewAllCustomerStart = () => ({
  type: viewAllCustomerConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewAllCustomerSuccess = (data) => ({
  type: viewAllCustomerConstant.Success,
  payload: data,
  error: undefined,
});

export const viewAllCustomerFailure = (error) => ({
  type: viewAllCustomerConstant.Failure,
  payload: undefined,
  error: error,
});

export const customer_login= (data) => ({
    type: viewAllCustomerConstant.Customer_Login,
    payload: data,
    error: undefined,
  });

export const viewAllCustomerThunk = () => {
  return (dispatch) => {
    const objAction = viewAllCustomerStart();
    dispatch(objAction);

    const promise = viewAllCustomerRequest();
    promise
      .then((response) => {
        console.log(response.data);
        let objActionsuccess = viewAllCustomerSuccess(response.data);
        dispatch(objActionsuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = viewAllCustomerFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};
