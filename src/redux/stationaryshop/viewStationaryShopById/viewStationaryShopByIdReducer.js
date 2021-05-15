import { viewStationaryShopByIdConstant } from "./viewStationaryShopByIdComponent";

const initial_State = {
    stationaryShop: undefined,
    error: undefined,
  };
  
  export const viewStationaryShopByIdReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewStationaryShopByIdConstant.Start:
        return {
          ...state,
        };
      case viewStationaryShopByIdConstant.Success:
        return {
          ...state,
          stationaryShop: action.payload,
          error: action.error,
        };
      case viewStationaryShopByIdConstant.Failure:
        return {
          ...state,
          stationaryShop: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };