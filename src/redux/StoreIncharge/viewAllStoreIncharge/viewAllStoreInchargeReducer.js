import { viewAllStoreInchargeConstant } from "./viewAllStoreInchargeConstant";

const initial_State = {
  storeIncharges: [],
  error: undefined,
};

export const viewAllStoreInchargeReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewAllStoreInchargeConstant.Start:
      return {
        ...state,
      };
    case viewAllStoreInchargeConstant.Success:
      return {
        ...state,
        storeIncharges: action.payload,
        error: action.error,
      };
    case viewAllStoreInchargeConstant.Failure:
      return {
        ...state,
        storeIncharges: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
