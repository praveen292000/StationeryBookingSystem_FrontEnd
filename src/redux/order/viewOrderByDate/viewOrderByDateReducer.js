import { viewOrderByDateConstant } from "./viewOrderByDateConstant";


const initial_State = {
    order:undefined,
    error:undefined

}
export const viewOrderByDateReducer=(state=initial_State,action)=>{
    switch(action.type){
        case  viewOrderByDateConstant.Start:
            return {
                ...state,
            };
        case viewOrderByDateConstant.Success:
            return{
                    ...state,
                    order: action.payload,
                    error: action.error
                };
        case viewOrderByDateConstant.Failure:
            return{
                    ...state,
                        error: action.error,
                        order: action.payload
                    };
            default:
            return state
                        
    }
}