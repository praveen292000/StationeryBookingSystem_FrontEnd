import { viewOrderByIdConstant } from "./viewOrderByIdConstant"

const initial_State = {
    order:undefined,
    error:undefined

}
export const viewOrderByIdReducer=(state=initial_State,action)=>{
    switch(action.type){
        case  viewOrderByIdConstant.Start:
            return {
                ...state,
            };
        case viewOrderByIdConstant.Success:
            return{
                    ...state,
                    order: action.payload,
                    error: action.error
                };
        case viewOrderByIdConstant.Failure:
            return{
                    ...state,
                        error: action.error,
                        order: action.payload
                    };
            default:
            return state
                        
    }
}