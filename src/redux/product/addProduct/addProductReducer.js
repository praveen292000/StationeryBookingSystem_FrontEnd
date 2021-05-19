import { addProductConstant } from "./addProductConstant";

const initial_State = {
  product: undefined,
  error: undefined,
};
export const addProductReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addProductConstant.Start:
      return {
        ...state,
      };
    case addProductConstant.Success:
      return {
        ...state,
        product: action.payload,
        error:action.error
      };
    case addProductConstant.Failure:
      return {
        ...state,
        product: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
