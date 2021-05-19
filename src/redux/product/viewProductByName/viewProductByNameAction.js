import { viewProductbyNameRequest } from "../../../services/productService"
import { viewProductByNameConstant } from "./viewProductByNameConstant"

export const viewProductByNameStart=()=>({
    type:viewProductByNameConstant.Start,
    payload:undefined,
    error:undefined
})
export const viewProductByNameSuccess=(data)=>({
    type:viewProductByNameConstant.Success,
    payload:data,
    error:undefined
})
export const viewProductByNameFailure=(error)=>({
    type:viewProductByNameConstant.Failure,
    payload:undefined,
    error:error
    
})

export const viewProductByNameThunk=(data)=>{
    return (dispatch)=>{
        const objAction =viewProductByNameStart();
        dispatch(objAction)  
        const promise = viewProductbyNameRequest(data);
        promise
          .then((response) => {
            console.log(response.data);
            let objActionSuccess= viewProductByNameSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            console.log(error.message);
            let objActionFailure = viewProductByNameFailure(error.message)
            dispatch(objActionFailure)
          });
        
    }
}