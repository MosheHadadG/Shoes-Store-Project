import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateShoe } from "../Apis/requests";
import '../ProductPage/productPage.css'

import '../ProductPage/productPage.css'
import './EditProductPage.css'
import './EditProductPageResponsive.css'


class EditProductPage extends Component {
  state = {
    nameProductInput: '',
    priceProductInput: '',
    descProductInput: '',
    updatedShoe: {}
  }

  changeInput = (event) => {
    const actionName = event.target.name;
    const value = event.target.value;
    this.setState({ [actionName]: value });
  }


  //! Update

  updatedShoe = async (id, updatedProduct) => {
    // update in dataBase
    await updateShoe(id, updatedProduct);
  }

  handleUpdateClick = () => {
    const { nameProductInput, priceProductInput, descProductInput } = this.state
    if (nameProductInput && priceProductInput && descProductInput) {
      const shoe = this.props.location.props.shoe;
      shoe.name = nameProductInput;
      shoe.price = priceProductInput;
      shoe.description = descProductInput;
      this.setState({ updatedShoe: shoe }, () => {
        this.updatedShoe(shoe.id, this.state.updatedShoe);
        this.props.history.push(`/product/shoe/${shoe.id}`);
      })
    }
  }


  render() {
    const { name, avatar, price, description, id } = this.props.location.props.shoe
    return (
      <div className="product-main">
        <div className="product-container">
          <div className="product-box">
            <div className="product-imgBox">
              <img src={avatar} alt="" />
            </div>
            <div className="product-info">
              <div className="product-edit-inputs">
                <div className="product-edit-title">
                  <input name="nameProductInput" onChange={this.changeInput} value={name}></input>
                </div>
                <div className="product-edit-price">
                  <input name="priceProductInput" onChange={this.changeInput} value={price}></input>
                </div>
                <div className="product-edit-description">
                  <textarea
                    maxLength={300}
                    rows="4"
                    cols="50"
                    name="descProductInput"
                    onChange={this.changeInput} value={description}>
                  </textarea>
                </div>
              </div>
            </div>

          </div>
          <div className="product-buttons">
            <Link to={`/product/shoe/${id}`}><button>Back</button></Link>
            <button onClick={this.handleUpdateClick}>Update</button>
          </div>
        </div>
      </div>
    )
  }

}

export default EditProductPage;
