import { updateBookingConstant } from "./updateBookingConstant";

const initial_State = {
  Booking: undefined,
  error: undefined,
};

export const updateBookingReducer = (state = initial_State, action) => {
  switch (action.type) {
    case updateBookingConstant.Start:
      return {
        ...state,
      };
    case updateBookingConstant.Success:
      return {
        ...state,
        Booking: action.payload,
        error: action.error,
      };
    case updateBookingConstant.Failure:
      return {
        ...state,
        Booking: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};