import { viewProductConstant } from "./viewProductConstant";

const initial_State = {
    product: undefined,
    error: undefined,
  };
  export const viewProductReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewProductConstant.Start:
        return {
          ...state,
        };
      case viewProductConstant.Success:
        return {
          ...state,
          product: action.payload,
          error:action.error
        };
      case viewProductConstant.Failure:
        return {
          ...state,
          product: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };