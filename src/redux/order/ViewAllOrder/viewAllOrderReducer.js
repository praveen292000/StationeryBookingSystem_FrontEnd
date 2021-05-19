import { viewAllOrderConstant } from "./viewAllOrderConstant";

const initial_State = {
  orders:[],
  error: undefined,
};
export const viewAllOrderReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewAllOrderConstant.Start:
      return {
        ...state,
      };
    case viewAllOrderConstant.Success:
      return {
        ...state,
        orders: action.payload,
        error: action.error,
      };
    case viewAllOrderConstant.Failure:
      return {
        ...state,
        error: action.error,
        orders: action.payload,
      };
    default:
      return state;
  }
};