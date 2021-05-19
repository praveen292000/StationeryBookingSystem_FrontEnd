import { addStoreInchargeResquest } from "../../../services/storeInchargeService";
import { addStoreInchargeConstant } from "./addStoreInchargeConstant";

export const addStoreInchargeStart=()=>({
    type:addStoreInchargeConstant.Start,
    payload:undefined,
    error:undefined
})

export const addStoreInchargeSuccess=(data)=>({
    type:addStoreInchargeConstant.Success,
    payload:data,
    error:undefined,
})

export const addStoreInchargeFailure=(error)=>({
    type:addStoreInchargeConstant.Failure,
    payload:undefined,
    error:error
})

export const addStoreInchargeThunk=(state)=>{
    return(dispatch)=>{
        const objAction=addStoreInchargeStart();
        dispatch(objAction)
        const data={
            storeInchargeName:state.storeInchargeName,
            managerName:state.managerName,
            contactNumber:state.contactNumber,
            buildingName:state.buildingName,
            area:state.area,
            streetNo:state.streetNo,
            city:state.city,
            state:state.state,
            country:state.country,
            pincode:state.pincode
          }


        const promise=addStoreInchargeResquest(data);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=addStoreInchargeSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.response.data);
      let objActionFailure=addStoreInchargeFailure(error.response.data);  
      dispatch(objActionFailure);
    })
    }
}