import { viewAllProductConstant } from "./viewAllProductConstant";

const initial_State = {
    products: [],
    error: undefined,
  };
  export const viewAllProductReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewAllProductConstant.Start:
        return {
          ...state,
        };
      case viewAllProductConstant.Success:
        return {
          ...state,
          products: action.payload,
          error:action.error
        };
      case viewAllProductConstant.Failure:
        return {
          ...state,
          products: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };