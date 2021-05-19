import { viewStoreInchargeById } from "../../../services/storeInchargeService"
import { viewStoreInchargeByIdConstant } from "./viewStoreInchargeByIdComponent"

export const viewStoreInchargeByIdStart=()=>({
    type:viewStoreInchargeByIdConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewStoreInchargeByIdSuccess=(data)=>({
    type:viewStoreInchargeByIdConstant.Success,
    payload:data,
    error:undefined,
})

export const viewStoreInchargeByIdFailure=(error)=>({
    type:viewStoreInchargeByIdConstant.Failure,
    payload:undefined,
    error:error
})

export const viewStoreInchargeByIdThunk=(state)=>{
    return(dispatch)=>{
        const objAction=viewStoreInchargeByIdStart();
        dispatch(objAction)

        const storeInchargeId=state.storeInchargeId


        const promise=viewStoreInchargeById(storeInchargeId);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewStoreInchargeByIdSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewStoreInchargeByIdFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}