import { viewBookingByCustomerIdConstant } from "./viewBookingByCustomerConstant";



const initial_State = {
  bookingDetails: [],
  error: undefined,
};

export const viewBookingByCustomerIdReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewBookingByCustomerIdConstant.Start:
      return {
        ...state,
      };
    case viewBookingByCustomerIdConstant.Success:
      return {
        ...state,
        bookingDetails: action.payload,
        error: action.error,
      };
    case viewBookingByCustomerIdConstant.Failure:
      return {
        ...state,
        bookingDetails: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
