import { combineReducers } from "redux";

//import { loginReducer} from "./LoginReducer";

import { viewOrderByDateReducer } from "./order/viewOrderByDate/viewOrderByDateReducer";
import { viewOrderByIdReducer } from "./order/viewOrderById/viewOrderByIdReducer";


import { addCustomerReducer } from "./customer/addCustomer/addCustomerReducer";
import { updateCustomerReducer } from "./customer/updateCustomer/updateCustomerReducer";
import { viewCustomerReducer } from "./customer/viewCustomer/viewCustomerReducer";

import { addProductReducer } from "./product/addProduct/addProductReducer";
import { viewProductReducer } from "./product/viewProduct/viewProductReducer";
import { viewProductByNameReducer } from "./product/viewProductByName/viewProductByNameReducer";



import { addStoreInchargeReducer } from "./StoreIncharge/addStoreIncharge/addStoreInchargeReducer";
import { viewStoreInchargeByIdReducer } from "./StoreIncharge/viewStoreInchargeById/viewStoreInchargeByIdReducer";
import { viewStoreInchargeReducer } from "./StoreIncharge/viewStoreIncharge/viewStoreInchargeReducer";

import { productToCartReducer } from "./Cart/productToCart/productToCartReducer"
import { addBookingReducer } from "./bookingDetail/addBookingDetail/addBookingReducer";
import { updateBookingReducer } from "./bookingDetail/updateBookingDetail/updateBookingReducer";
import { viewBookingByCustomerIdReducer } from "./bookingDetail/viewBookingByCustomer/viewBookingByCustomerReducer";
import {viewBookingReducer} from "./bookingDetail/viewBookingDetail/viewBookingReducer";

import { viewAllStoreInchargeReducer } from "./StoreIncharge/viewAllStoreIncharge/viewAllStoreInchargeReducer";
import { viewAllProductReducer } from "./product/viewAllProduct/viewAllProductReducer";
import { viewAllCustomerReducer } from "./customer/viewAllCustomer/viewAllCustomerReducer";
import { viewAllOrderReducer } from "./order/viewAllOrders/viewAllOrderReducer";
import LoginReducer from "./Login/LoginReducer";


 export const rootReducer=combineReducers({
    Login: LoginReducer,
    updateBooking : updateBookingReducer,
    viewBooking:viewBookingReducer,
    viewBookingByCustomer:viewBookingByCustomerIdReducer,
    productToCart:productToCartReducer,
    addBooking:addBookingReducer,
    addStoreIncharge:addStoreInchargeReducer,
    viewStoreInchargeById:viewStoreInchargeByIdReducer,
    viewStoreIncharge:viewStoreInchargeReducer,
    //viewStoreInchargeByLocation:viewStoreInchargeByLocationReducer,
    viewStoreIncharge:viewStoreInchargeReducer,
    addProduct:addProductReducer,
    viewProduct:viewProductReducer,
    viewProductByName:viewProductByNameReducer,
    addCustomer: addCustomerReducer,
    updateCustomer: updateCustomerReducer,
    viewCustomer: viewCustomerReducer,
    viewOrderById : viewOrderByIdReducer,
     viewOrderByDate: viewOrderByDateReducer,
     viewAllStoreIncharge: viewAllStoreInchargeReducer,
     viewAllProduct:viewAllProductReducer,
     viewAllCustomer:viewAllCustomerReducer,
     viewAllOrder:viewAllOrderReducer


})
