import { addStoreInchargeConstant } from "./addStoreInchargeConstant";

const initial_State = {
  storeIncharge: undefined,
  error: undefined,
};

export const addStoreInchargeReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addStoreInchargeConstant.Start:
      return {
        ...state,
      };
    case addStoreInchargeConstant.Success:
      return {
        ...state,
        storeIncharge: action.payload,
        error: action.error,
      };
    case addStoreInchargeConstant.Failure:
      return {
        ...state,
        storeIncharge: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
