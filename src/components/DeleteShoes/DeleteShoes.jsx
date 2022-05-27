import React, { Component } from "react";


class DeleteShoes extends Component {

  handleDeleteShoe(event) {
    return this.props.shoeID;
  }


  render() {
    const { ClickedDelete } = this.props
    return (
      <button
        className="button-delete"
        onClick={() => ClickedDelete(this.handleDeleteShoe())}>Delete</button>
    )
  }

}

export default DeleteShoes;
