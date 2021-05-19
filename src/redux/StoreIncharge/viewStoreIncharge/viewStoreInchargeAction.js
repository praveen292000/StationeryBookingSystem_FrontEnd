import { viewStoreInchargeRequest } from "../../../services/storeInchargeService"
import { viewStoreInchargeConstant } from "./viewStoreInchargeConstant"

export const viewStoreInchargeStart=()=>({
    type:viewStoreInchargeConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewStoreInchargeSuccess=(data)=>({
    type:viewStoreInchargeConstant.Success,
    payload:data,
    error:undefined,
})

export const viewStoreInchargeFailure=(error)=>({
    type:viewStoreInchargeConstant.Failure,
    payload:undefined,
    error:error
})

export const viewStoreInchargeThunk = (id) => {
    return (dispatch) => {
      const objAction = viewStoreInchargeStart();
      dispatch(objAction);
  
      const promise = viewStoreInchargeRequest(id);
      promise
        .then((response) => {
          console.log(response.data);
          let objActionsuccess = viewStoreInchargeSuccess(response.data);
          dispatch(objActionsuccess);
        })
        .catch((error) => {
          console.log(error.message);
          let objActionFailure = viewStoreInchargeFailure(error.message);
          dispatch(objActionFailure);
        });
    };
  };