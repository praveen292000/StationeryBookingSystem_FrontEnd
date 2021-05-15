import { addStationaryShopConstant } from "./addStationaryShopConstant";

const initial_State = {
  stationaryShop: undefined,
  error: undefined,
};

export const addStationaryShopReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addStationaryShopConstant.Start:
      return {
        ...state,
      };
    case addStationaryShopConstant.Success:
      return {
        ...state,
        stationaryShop: action.payload,
        error: action.error,
      };
    case addStationaryShopConstant.Failure:
      return {
        ...state,
        stationaryShop: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
