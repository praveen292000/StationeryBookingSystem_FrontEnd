import { addCustomerRequest } from "../../../services/customerService";
import { addCustomerConstant } from "./addCustomerConstant";

export const addCustomerStart=()=>({
    type:addCustomerConstant.Fetch_Add_Customer_Start,
    payload:undefined,
    error:undefined
})

export const addCustomerSuccess=(data)=>({
    type:addCustomerConstant.Fetch_Add_Customer_Success,
    payload:data,
    error:undefined
})

export const addCustomerFailure=(error)=>({
    type:addCustomerConstant.Fetch_Add_Customer_Failure,
    payload:undefined,
    error:error
})
export const addCustomerThunk=(state)=>{
    return (dispatch)=>{
        const objAction=addCustomerStart();
        dispatch(objAction)
        const data={
            firstName:state.firstName,
            lastName:state.lastName,
            gender:state.gender,
            age:state.age,
            email:state.email,
            mobileNumber:state.mobileNumber,
            area:state.area,
            pincode:state.pincode,
            buildingName:state.buildingName
          }
        const promise=addCustomerRequest(data);
        promise.then((response)=>{
        console.log(response.data);
        let objActionsuccess=addCustomerSuccess(response.data);
        dispatch(objActionsuccess)
    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure= addCustomerFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}