import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
     const {item, handleChange, handleSubmit, editItem } = this.props

    return (
      <div className="card card-body mt-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"/>
              </div>
            <input   type="text" 
                     className="form-control text-capitalize" 
                     placeholder="enter todo item" 
                     value = {item}
                     onChange = {handleChange}
                     />        
          </div>
          <div className="list-group">
          <button type="submit" className={editItem ? "btn btn-block btn-sm btn-success mt-3" : "btn btn-block btn-sm btn-primary mt-3"}>
               {editItem ? "Edit Item" : "Add Item"} 
          </button>
          </div>
        </form>
      </div>
    )
  }
}
