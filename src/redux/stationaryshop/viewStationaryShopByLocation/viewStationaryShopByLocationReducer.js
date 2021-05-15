import { viewStationaryShopByLocationConstant } from "./viewStationaryShopByLocationComponent";

const initial_State = {
    stationaryShop: undefined,
    error: undefined,
  };
  
  export const viewStationaryShopByLocationReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewStationaryShopByLocationConstant.Start:
        return {
          ...state,
        };
      case viewStationaryShopByLocationConstant.Success:
        return {
          ...state,
          stationaryShop: action.payload,
          error: action.error,
        };
      case viewStationaryShopByLocationConstant.Failure:
        return {
          ...state,
          stationaryShop: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };