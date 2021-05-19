import { viewStoreInchargeByIdConstant } from "./viewStoreInchargeByIdComponent";

const initial_State = {
    storeIncharge: undefined,
    error: undefined,
  };
  
  export const viewStoreInchargeByIdReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewStoreInchargeByIdConstant.Start:
        return {
          ...state,
        };
      case viewStoreInchargeByIdConstant.Success:
        return {
          ...state,
          storeIncharge: action.payload,
          error: action.error,
        };
      case viewStoreInchargeByIdConstant.Failure:
        return {
          ...state,
          storeIncharge: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };