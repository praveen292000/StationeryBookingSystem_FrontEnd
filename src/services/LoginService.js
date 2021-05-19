import axios from 'axios';

const LOGINURL="http://localhost:8587";

export const loginSuccess=(login)=>{

    console.log("inside loginsuccess method");
    console.log(login);
    return{
        type:'LOGIN_SUCCESS',login
    }
};
export const loginValidate=(payload)=>{
    console.log("inside loginvalidate  method");
    let data={
        customername:payload.customername,
        password:payload.password
   }
    console.log(data.customername);
    return (dispatch)=>{
        return axios.post(LOGINURL+"/validate",data)
        
        .then(Response=>{
          
           localStorage.setItem("login",JSON.stringify(Response.data));
           if(Response.data.role=='admin'){
               sessionStorage.setItem("adminId",Response.data.customername);

           }
           else{
               sessionStorage.setItem("customername",Response.data.customername);
           }
            console.log("api call");
            dispatch(loginSuccess(Response.data));

        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
};