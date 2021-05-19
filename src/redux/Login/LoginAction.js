import axios from 'axios';

const LOGINURL="http://localhost:8587/customers";

export const loginSuccess=(login)=>{

    console.log("inside loginsuccess method");
   
    return{
        type:'LOGIN_SUCCESS',login
    }
};
export const loginValidate=(payload)=>{
    console.log("inside loginvalidate  method");
    let data={
        email:payload.email,
        password:payload.password
   }
   
    return (dispatch)=>{
        return axios.post(LOGINURL+"/validate",data)
        
        .then(Response=>{
          
           localStorage.setItem("login",JSON.stringify(Response.data));
           if(Response.data.role==='admin'){
            sessionStorage.setItem("adminId",Response.data.customerId);
           }
           else{
           sessionStorage.setItem("userId",Response.data.customerId);
           sessionStorage.setItem("username",Response.data.firstName);
           }
            
            dispatch(loginSuccess(Response.data));

        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
};
