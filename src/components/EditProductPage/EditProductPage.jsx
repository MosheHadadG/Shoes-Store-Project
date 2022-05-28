import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateShoe } from "../Apis/requests";

import '../ProductPage/productPage.css'
import './EditProductPage.css'
import './EditProductPageResponsive.css'


class EditProductPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameProductInput: '',
      priceProductInput: '',
      descProductInput: '',
      updatedShoe: {}
    }

    this.nameProductRef = React.createRef();
    this.priceProductRef = React.createRef();
    this.descProductRef = React.createRef();
  }

  componentDidMount = () => {
    const nameProductVal = this.nameProductRef.current.value;
    const priceProductVal = this.priceProductRef.current.value;
    const descProductVal = this.descProductRef.current.value;
    this.setState({
      nameProductInput: nameProductVal,
      priceProductInput: priceProductVal,
      descProductInput: descProductVal
    })
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
                  <input
                    ref={this.nameProductRef}
                    name="nameProductInput"
                    onChange={this.changeInput}
                    defaultValue={name} />
                </div>
                <div className="product-edit-price">
                  <input
                    ref={this.priceProductRef}
                    name="priceProductInput"
                    onChange={this.changeInput}
                    defaultValue={price} />
                </div>
                <div className="product-edit-description">
                  <textarea
                    ref={this.descProductRef}
                    maxLength={320}
                    rows="5"
                    cols="50"
                    name="descProductInput"
                    onChange={this.changeInput}
                    defaultValue={description} />
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
