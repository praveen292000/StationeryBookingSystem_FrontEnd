import React from "react";
import "./App.css";
import Nav from "./components/Nav";
//import Register from "./components/Register";
import CustomerPage from "./pages/CustomerPage";
import OrderPage from "./pages/OrderPage";
import StoreInchargePage from "./pages/StoreInchargePage";
import CartPage from "./pages/CartPage";
import BookingDetailPage from "./pages/BookingDetailPage";
import ProductPage from "./pages/ProductPage";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route  path="/Login" component={LoginPage} />
          <Route exact path="/" component={Home} />
          <Route  path="/Register" component={RegisterPage} />
          <Route  path="/customer" component={CustomerPage} />
          <Route  path="/storeIncharge" component={StoreInchargePage} />
          <Route  path="/product" component={ProductPage} />
          <Route  path="/cart" component={CartPage} />
          <Route  path="/booking" component={BookingDetailPage} />
          <Route  path="/order" component={OrderPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
