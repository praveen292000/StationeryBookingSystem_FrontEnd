import { viewCustomerRequest } from "../../../services/customerService";
import { viewCustomerConstant} from "./viewCustomerConstant";

export const viewCustomerStart = () => ({
  type: viewCustomerConstant.Fetch_View_Customer_Start,
  payload: undefined,
  error: undefined,
});

export const viewCustomerSuccess = (data) => ({
  type: viewCustomerConstant.Fetch_View_Customer_Success,
  payload: data,
  error: undefined,
});

export const viewCustomerFailure = (error) => ({
  type: viewCustomerConstant.Fetch_View_Customer_Failure,
  payload: undefined,
  error: error,
});
export const viewCustomerThunk = (id) => {
  return (dispatch) => {
    const objAction = viewCustomerStart();
    dispatch(objAction);

    const promise = viewCustomerRequest(id);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionsuccess = viewCustomerSuccess(response.data);
        dispatch(objActionsuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = viewCustomerFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};
