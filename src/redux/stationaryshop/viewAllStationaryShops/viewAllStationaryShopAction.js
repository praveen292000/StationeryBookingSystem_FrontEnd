import { viewAllStationaryShop } from "../../../services/stationaryShopService"
import { viewAllStationaryShopConstant } from "./viewAllStationaryShopConstant"

export const viewAllStationaryShopStart=()=>({
    type:viewAllStationaryShopConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewAllStationaryShopSuccess=(data)=>({
    type:viewAllStationaryShopConstant.Success,
    payload:data,
    error:undefined,
})

export const viewAllStationaryShopFailure=(error)=>({
    type:viewAllStationaryShopConstant.Failure,
    payload:undefined,
    error:error
})

export const viewAllStationaryShopThunk=()=>{
    return(dispatch)=>{
        const objAction=viewAllStationaryShopStart();
        dispatch(objAction)


        const promise=viewAllStationaryShop();
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewAllStationaryShopSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewAllStationaryShopFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}