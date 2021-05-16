import { viewOrderByIdRequest } from "../../../services/orderDetailsServices";
import { viewOrderByIdConstant } from "./viewOrderByIdConstant";

export const viewOrderByIdStart=()=>({
    type:viewOrderByIdConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewOrderByIdSuccess=(data)=>({

    type:viewOrderByIdConstant.Success,
    payload:data,
    error:undefined
})

export const viewOrderByIdFailure=(error)=>({
    type:viewOrderByIdConstant.Failure,
    payload:undefined,
    error:error
})
export const viewOrderByIdThunk=(data)=>{
    return(dispatch)=>{
        const objAction=viewOrderByIdStart();
        dispatch(objAction) 
        const promise=viewOrderByIdRequest(data.orderId);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewOrderByIdSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewOrderByIdFailure(error.message)
      dispatch(objActionFailure)

    })
    
    }
}