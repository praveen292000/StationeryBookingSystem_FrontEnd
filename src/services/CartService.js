import axios from 'axios';
const baseUrl = "http://localhost:8587";


 export function addProductToCartRequest(data){
     const url=baseUrl+"/cart/addproducttocart"
     const promise=axios.post(url,data)
     return promise;
 }  
export function increaseQuantityRequest(data){
    const url=baseUrl+"/cart/increasequantity"
    const promise=axios.put(url,data);
    return promise;
}

export function reduceQuantityRequest(data){
    const url=baseUrl+"/cart/reducequantity"
    const promise=axios.put(url,data);
    return promise;
}
