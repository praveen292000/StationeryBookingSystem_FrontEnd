import { viewAllStoreIncharge } from "../../../services/storeInchargeService"
import { viewAllStoreInchargeConstant } from "./viewAllStoreInchargeConstant"

export const viewAllStoreInchargeStart=()=>({
    type:viewAllStoreInchargeConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewAllStoreInchargeSuccess=(data)=>({
    type:viewAllStoreInchargeConstant.Success,
    payload:data,
    error:undefined,
})

export const viewAllStoreInchargeFailure=(error)=>({
    type:viewAllStoreInchargeConstant.Failure,
    payload:undefined,
    error:error
})

export const viewAllStoreInchargeThunk=()=>{
    return(dispatch)=>{
        const objAction=viewAllStoreInchargeStart();
        dispatch(objAction)


        const promise=viewAllStoreIncharge();
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewAllStoreInchargeSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewAllStoreInchargeFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}