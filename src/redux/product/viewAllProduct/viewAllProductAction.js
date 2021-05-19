import { viewAllProductRequest } from "../../../services/productService"
import { viewAllProductConstant } from "./viewAllProductConstant"

export const viewAllProductStart=()=>({
    type:viewAllProductConstant.Start,
    payload:undefined,
    error:undefined
})
export const viewAllProductSuccess=(data)=>({
    type:viewAllProductConstant.Success,
    payload:data,
    error:undefined
})
export const viewAllProductFailure=(error)=>({
    type:viewAllProductConstant.Failure,
    payload:undefined,
    error:error 
})

export const viewAllProductThunk=()=>{
    return (dispatch)=>{
        const objAction =viewAllProductStart();
        dispatch(objAction)  
        const promise = viewAllProductRequest();
        promise
          .then((response) => {
            let objActionSuccess= viewAllProductSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            let objActionFailure = viewAllProductFailure(error.message)
            dispatch(objActionFailure)
          });
        
    }
}