import { viewProductRequest } from "../../../services/productService"
import { viewProductConstant } from "./viewProductConstant"

export const viewProductStart=()=>({
    type:viewProductConstant.Start,
    payload:undefined,
    error:undefined
})
export const viewProductSuccess=(data)=>({
    type:viewProductConstant.Success,
    payload:data,
    error:undefined
})
export const viewProductFailure=(error)=>({
    type:viewProductConstant.Failure,
    payload:undefined,
    error:error
    
})

export const viewProductThunk=(data)=>{
    return (dispatch)=>{
        const objAction =viewProductStart();
        dispatch(objAction)  
      //  const data = {product_Id : data.product_Id}
        const promise = viewProductRequest(data);
        promise
          .then((response) => {
            let objActionSuccess= viewProductSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            let objActionFailure = viewProductFailure(error.response.data)
            dispatch(objActionFailure)
          });
        
    }
}