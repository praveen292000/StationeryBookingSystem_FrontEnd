import { viewAllCustomerConstant } from "./viewAllCustomerConstant";

const initial_State = {
  customers: [],
  customer: undefined,
  error: undefined,
};

export const viewAllCustomerReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewAllCustomerConstant.Start:
      return {
        ...state,
      };
    case viewAllCustomerConstant.Success:
      return {
        ...state,
        customers: action.payload,
        error: action.error,
      };
    case viewAllCustomerConstant.Failure:
      return {
        ...state,
        customers: action.payload,
        error: action.error,
      };

    case viewAllCustomerConstant.Customer_Login:
      return {
        ...state,
        customer: action.payload,
      };
    default:
      return state;
  }
};
