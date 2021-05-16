import { viewOrderByDateRequest } from "../../../services/orderDetailsServices"
import { viewOrderByDateConstant } from "./viewOrderByDateConstant"


export const viewOrderByDateStart=()=>({
    type:viewOrderByDateConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewOrderByDateSuccess=(data)=>({

    type:viewOrderByDateConstant.Success,
    payload:data,
    error:undefined
})

export const viewOrderByDateFailure=(error)=>({
    type:viewOrderByDateConstant.Failure,
    payload:undefined,
    error:error
})
export const viewOrderByDateThunk=(data)=>{
    return(dispatch)=>{
        const objAction=viewOrderByDateStart();
        dispatch(objAction) 
        const promise=viewOrderByDateRequest(data.startDate, data.endDate);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewOrderByDateSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewOrderByDateFailure(error.message)
      dispatch(objActionFailure)

    })
    
    }
}