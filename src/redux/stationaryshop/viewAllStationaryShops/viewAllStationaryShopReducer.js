import { viewAllStationaryShopConstant } from "./viewAllStationaryShopConstant";

const initial_State = {
  stationaryShops: [],
  error: undefined,
};

export const viewAllStationaryShopReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewAllStationaryShopConstant.Start:
      return {
        ...state,
      };
    case viewAllStationaryShopConstant.Success:
      return {
        ...state,
        stationaryShops: action.payload,
        error: action.error,
      };
    case viewAllStationaryShopConstant.Failure:
      return {
        ...state,
        stationaryShops: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
