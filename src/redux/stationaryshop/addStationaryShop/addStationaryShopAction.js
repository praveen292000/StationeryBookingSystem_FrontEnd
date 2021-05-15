import { addStationaryShopResquest } from "../../../services/stationaryShopService";
import { addStationaryShopConstant } from "./addStationaryShopConstant";

export const addStationaryShopStart=()=>({
    type:addStationaryShopConstant.Start,
    payload:undefined,
    error:undefined
})

export const addStationaryShopSuccess=(data)=>({
    type:addStationaryShopConstant.Success,
    payload:data,
    error:undefined,
})

export const addStationaryShopFailure=(error)=>({
    type:addStationaryShopConstant.Failure,
    payload:undefined,
    error:error
})

export const addStationaryShopThunk=(state)=>{
    return(dispatch)=>{
        const objAction=addStationaryShopStart();
        dispatch(objAction)
        const data={
            stationaryShopName:state.stationaryShopName,
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


        const promise=addStationaryShopResquest(data);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=addStationaryShopSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=addStationaryShopFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}