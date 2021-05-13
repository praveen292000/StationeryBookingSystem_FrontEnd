import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import ProductsPage from "./Pages/ProductPage";
import Home from "./components/HomePage";
import { Route, Switch } from "react-router";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/product" component={ProductsPage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;