import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/productPage";
import EditProductPage from "./components/EditProductPage/EditProductPage";
import { getShoes } from "./components/Apis/requests";
import Header from "./components/Header/Header";


import './App.css'
class App extends Component {
  state = {
    shoes: []
  }

  setStateApp = (newState) => {
    this.setState(newState)
  }


  componentDidMount = async () => {
    const shoes = await getShoes();
    this.setState({ shoes })
    // const shoe = await getShoe(24);
    // console.log(shoe)
    // await deleteShoe(24);
    // console.log(shoe)
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact
            path="/"
            render={(props) => <HomePage {...props}
              setStateApp={this.setStateApp} shoes={this.state.shoes} />} />
          <Route exact path="/product/shoe/:id" render={(props) => <ProductPage {...props} shoes={this.state.shoes} />} />
          <Route exact path="/product/shoe/edit/:id" render={(props) => <EditProductPage {...props} shoes={this.state.shoes} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;