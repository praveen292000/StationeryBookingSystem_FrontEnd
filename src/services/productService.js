import axios from 'axios';
const baseUrl = "http://localhost:8587";

export function addProductRequest(data){
    console.log("-------- Inside Add Product Request --------")
    const url = baseUrl+("/products/add")
    //const data={};
    const promise=axios.post(url,data);
    return promise;
}

export function viewProductRequest(data){
    console.log("-------- Inside viewProductRequest --------")
    const id=data.product_Id;
   // const data1 = {product_Id : data.product_Id}
    const url = baseUrl+(`/products/search/${id}`)
    const promise=axios.get(url);
    return promise;
}
export function viewProductbyNameRequest(data){
    console.log("-------- Inside viewProductbyNameRequest--------")
    const name=data.productName;
    const url = baseUrl+(`/products/byname/${name}`)
    const promise=axios.get(url);
    return promise;
}
export function viewAllProductRequest(){
    console.log("-------- Inside viewAllProductRequest--------")
    const url = baseUrl+(`/products/view-all`)
    const promise=axios.get(url);
    return promise;
}
