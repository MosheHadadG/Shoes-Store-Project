import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteShoes from "../DeleteShoes/DeleteShoes";
import CreateShoes from "../CreateShoes/CreateShoes";
import './HomePage.css'
import { deleteShoe } from '../Apis/requests'
class HomePage extends Component {


  //! Delete
  deleteShoe = async (id) => {
    // delete Shoe From DataBase
    await deleteShoe(id);
    // delete Shoe from State
    const { shoes } = this.props;
    const deletedShoeFromArray = shoes.filter((shoe) => {
      return shoe.id !== id;
    })
    // update state and lift up to app component
    this.props.setStateApp({ shoes: deletedShoeFromArray });
  }

  createShoeUP = (newShoes) => {
    this.props.setStateApp({ shoes: newShoes });
  }


  renderdShoes = () => {
    const { shoes } = this.props
    const render = shoes.map(({ id, name, avatar, price }) => {
      return (
        <div key={id} className="shoe">
          <div className="shoe-img">
            <img src={avatar} alt="" />
          </div>
          <div className="shoe-name">
            <h1>{name}</h1>
          </div>
          <div className="shoe-price">
            <h3>{price}$</h3>
          </div>
          <div className="buttons">
            <DeleteShoes shoeID={id} ClickedDelete={this.deleteShoe} />
            <Link to={`/product/shoe/${id}`}><button className="button-more">More Info</button></Link>
          </div>
        </div>
      );
    })
    return render;
  }

  render() {
    return (
      <div className="main">
        <div className="shoes">
          {this.renderdShoes()}
        </div>
        <div className="createShoes-container">
          <CreateShoes createShoeUP={this.createShoeUP} shoes={this.props.shoes}/>
        </div>
      </div>

    );
  }
}

export default HomePage;