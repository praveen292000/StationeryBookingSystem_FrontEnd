import { viewStoreInchargeConstant } from "./viewStoreInchargeConstant";

const initial_State = {
    storeIncharge: undefined,
    error: undefined,
  };
  
  export const viewStoreInchargeReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewStoreInchargeConstant.Start:
        return {
          ...state,
        };
      case viewStoreInchargeConstant.Success:
        return {
          ...state,
          storeIncharge: action.payload,
          error: action.error,
        };
      case viewStoreInchargeConstant.Failure:
        return {
          ...state,
          storeIncharge: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };