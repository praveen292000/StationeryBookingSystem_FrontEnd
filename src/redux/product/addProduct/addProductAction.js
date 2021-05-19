import { addProductRequest } from "../../../services/productService";
import { addProductConstant } from "./addProductConstant";

export const addProductStart=()=>({
    type:addProductConstant.Start,
    payload:undefined,
    error:undefined
})
export const addProductSuccess=(data)=>({
    type:addProductConstant.Success,
    payload:data,
    error:undefined
})
export const addProductFailure=(error)=>({
    type:addProductConstant.Failure,
    payload:undefined,
    error:error
    
})

export const addProductThunk=(state)=>{
    return (dispatch)=>{
        const objAction =addProductStart();
        dispatch(objAction)
        const data = {
            product_Name:state.product_Name,
                 product_Quantity:state.product_Quantity,
            product_Price:state.product_Price,
             };
        const promise = addProductRequest(data);
        promise
          .then((response) => {
            console.log(response.data);
            let objActionSuccess= addProductSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            console.log(error.message);
            console.log(error.response.data);
            let objActionFailure = addProductFailure(error.message)
            dispatch(objActionFailure)
          });
        
    }
}