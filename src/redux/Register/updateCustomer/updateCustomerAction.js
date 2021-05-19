import { updateCustomerRequest } from "../../../services/customerService";
import { updateCustomerConstant } from "./updateCustomerConstant";

export const updateCustomerStart=()=>({
    type:updateCustomerConstant.Fetch_Update_Customer_Start,
    payload:undefined,
    error:undefined
})

export const updateCustomerSuccess=(data)=>({
    type:updateCustomerConstant.Fetch_Update_Customer_Success,
    payload:data,
    error:undefined
})

export const updateCustomerFailure=(error)=>({
    type:updateCustomerConstant.Fetch_Update_Customer_Failure,
    payload:undefined,
    error:error
})
export const updateCustomerThunk=(data)=>{
    return (dispatch)=>{
        const objAction=updateCustomerStart();
        dispatch(objAction)
        const promise=updateCustomerRequest(data);
        promise.then((response)=>{
        console.log(response.data);
        let objActionsuccess=updateCustomerSuccess(response.data);
        dispatch(objActionsuccess)
    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure= updateCustomerFailure(error.response.data);
      dispatch(objActionFailure);
    })
    }
}