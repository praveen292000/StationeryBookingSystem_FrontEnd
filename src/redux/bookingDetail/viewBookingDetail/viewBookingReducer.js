import { viewBookingConstant } from "./viewBookingConstant";


const initial_State = {
  bookingDetail: undefined,
  error: undefined,
};

export const viewBookingReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewBookingConstant.Start:
      return {
        ...state,
      };
    case viewBookingConstant.Success:
      return {
        ...state,
        bookingDetail: action.payload,
        error: action.error,
      };
    case viewBookingConstant.Failure:
      return {
        ...state,
        bookingDetail: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
