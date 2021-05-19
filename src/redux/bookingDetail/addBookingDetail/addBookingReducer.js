import { addBookingConstant } from "./addBookingConstant";

const initial_State = {
  bookingDetail: undefined,
  error: undefined,
};

export const addBookingReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addBookingConstant.Start:
      return {
        ...state,
      };
    case addBookingConstant.Success:
      return {
        ...state,
        bookingDetail: action.payload,
        error: action.error,
      };
    case addBookingConstant.Failure:
      return {
        ...state,
        bookingDetail: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
