import { viewCustomerConstant } from "./viewCustomerConstant";

const initial_State = {
  customer: undefined,
  error: undefined,
};

export const viewCustomerReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewCustomerConstant.Fetch_View_Customer_Start:
      return {
        ...state,
      };
    case viewCustomerConstant.Fetch_View_Customer_Success:
      return {
        ...state,
        customer: action.payload,
        error: action.error,
      };
    case viewCustomerConstant.Fetch_View_Customer_Failure:
      return {
        ...state,
        customer: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
