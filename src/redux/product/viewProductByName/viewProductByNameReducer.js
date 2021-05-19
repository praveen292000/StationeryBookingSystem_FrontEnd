import { viewProductByNameConstant } from "./viewProductByNameConstant";

const initial_State = {
    product: [],
    error: undefined,
  };
  export const viewProductByNameReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewProductByNameConstant.Start:
        return {
          ...state,
        };
      case viewProductByNameConstant.Success:
        return {
          ...state,
          product: action.payload,
          error:action.error
        };
      case viewProductByNameConstant.Failure:
        return {
          ...state,
          product: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };