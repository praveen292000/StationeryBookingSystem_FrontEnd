import { viewStationaryShopByLocation } from "../../../services/stationaryShopService"
import { viewStationaryShopByLocationConstant } from "./viewStationaryShopByLocationComponent"

export const viewStationaryShopByLocationStart=()=>({
    type:viewStationaryShopByLocationConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewStationaryShopByLocationSuccess=(data)=>({
    type:viewStationaryShopByLocationConstant.Success,
    payload:data,
    error:undefined,
})

export const viewStationaryShopByLocationFailure=(error)=>({
    type:viewStationaryShopByLocationConstant.Failure,
    payload:undefined,
    error:error
})

export const viewStationaryShopByLocationThunk=(state)=>{
    return(dispatch)=>{
        const objAction=viewStationaryShopByLocationStart();
        dispatch(objAction)
        
        const pincode=state.pincode

    const promise=viewStationaryShopByLocation(pincode);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewStationaryShopByLocationSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewStationaryShopByLocationFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}