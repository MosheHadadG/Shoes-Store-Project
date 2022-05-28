import React, { Component } from "react";
import { createShoe } from "../Apis/requests";
import "./CreateShoes.css"

class CreateShoes extends Component {
  state = {
    urlProductInput: '',
    nameProductInput: '',
    priceProductInput: '',
    newShoe: {}
  }

  changeInput = (event) => {
    const actionName = event.target.name;
    const value = event.target.value;
    this.setState({ [actionName]: value });
  }

  //! Create 

  createdShoe = async (newShoe) => {
    await createShoe(newShoe)
  }

  handleCreateClick = () => {
    const { urlProductInput, nameProductInput, priceProductInput } = this.state
    if (nameProductInput && priceProductInput && urlProductInput) {
      const newShoe = {
        name: nameProductInput,
        avatar: urlProductInput,
        price: priceProductInput
      }
      this.createdShoe(newShoe);
      this.props.createShoeUP([...this.props.shoes, newShoe]);
      this.setState({
        urlProductInput: '',
        nameProductInput: '',
        priceProductInput: '',
        newShoe: {}
      })
    }
  }

  clearInputs = () => {
    this.setState({
      urlProductInput: '',
      nameProductInput: '',
      priceProductInput: '',
      newShoe: {}
    })
  }

  render() {
    const { urlProductInput, nameProductInput, priceProductInput } = this.state
    return (
      <>
        <div className="createShoes-title">
          <h1>Add New Shoes</h1>
        </div>
        <div className="createShoes-inputs">
          <input
            value={urlProductInput}
            name="urlProductInput"
            onChange={this.changeInput}
            placeholder="Enter URL Image" />
          <input value={nameProductInput}
            name="nameProductInput"
            onChange={this.changeInput}
            placeholder="Enter Name Shoes" />
          <input type="number"
            value={priceProductInput}
            name="priceProductInput"
            onChange={this.changeInput}
            placeholder="Enter Price Shoes" />
        </div>
        <div className="createShoes-buttons">
          <button onClick={this.handleCreateClick}>Add</button>
          <button onClick={this.clearInputs}>Clear</button>
        </div>

      </>

    );
  }
}

export default CreateShoes;