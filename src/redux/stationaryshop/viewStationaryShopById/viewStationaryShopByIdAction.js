import { viewStationaryShopById } from "../../../services/stationaryShopService"
import { viewStationaryShopByIdConstant } from "./viewStationaryShopByIdComponent"

export const viewStationaryShopByIdStart=()=>({
    type:viewStationaryShopByIdConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewStationaryShopByIdSuccess=(data)=>({
    type:viewStationaryShopByIdConstant.Success,
    payload:data,
    error:undefined,
})

export const viewStationaryShopByIdFailure=(error)=>({
    type:viewStationaryShopByIdConstant.Failure,
    payload:undefined,
    error:error
})

export const viewStationaryShopByIdThunk=(state)=>{
    return(dispatch)=>{
        const objAction=viewStationaryShopByIdStart();
        dispatch(objAction)

        const stationaryShopId=state.stationaryShopId


        const promise=viewStationaryShopById(stationaryShopId);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewStationaryShopByIdSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewStationaryShopByIdFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}