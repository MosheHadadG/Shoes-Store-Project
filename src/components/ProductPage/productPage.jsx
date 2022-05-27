import React, { Component } from "react";
import { Link } from "react-router-dom";
import './productPage.css';
import Spinner from "../Spinner/Spinner";

class ProductPage extends Component {

  findShoe = () => {
    console.log(this.props)
    const { shoes, match } = this.props
    const shoeID = match.params.id;
    const shoe = shoes.find((shoe) => shoe.id === shoeID)
    return shoe
  }

  renderdShoe = () => {
    const { Spinning } = this.props;
    if (Spinning) {
      return <Spinner />
    }
    else {
      const shoe = this.findShoe();
      return (
        <div className="product-container">
          <div className="product-box">
            <div className="product-imgBox">
              <img src={shoe.avatar} alt="" />
            </div>
            <div className="product-info">
              <div className="product-title">
                <h1>{shoe.name}</h1>
              </div>
              <div className="product-price">
                <h2>price: {shoe.price}$</h2>
              </div>
            </div>
          </div>
          <div className="product-buttons">
            <Link to={`/`}><button>Back</button></Link>
            <Link to={{ pathname: `/product/shoe/edit/${shoe.id}`, props: { shoe: shoe } }}>
              <button>Edit</button></Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="product-main">
        {this.renderdShoe()}
      </div>
    )
  }

}

export default ProductPage;

