import { viewAllOrderRequest} from "../../../services/orderDetailsServices";
import { viewAllOrderConstant } from "./viewAllOrderConstant";

export const viewAllOrderStart=()=>({
    type:viewAllOrderConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewAllOrderSuccess=(data)=>({

    type:viewAllOrderConstant.Success,
    payload:data,
    error:undefined
})

export const viewAllOrderFailure=(error)=>({
    type:viewAllOrderConstant.Failure,
    payload:undefined,
    error:error
})
export const viewAllOrderThunk=(customerId)=>{
    return(dispatch)=>{
        const objAction=viewAllOrderStart();
        dispatch(objAction) 
        const promise=viewAllOrderRequest(customerId);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewAllOrderSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewAllOrderFailure(error.message)
      dispatch(objActionFailure)

    })
    
    }
}