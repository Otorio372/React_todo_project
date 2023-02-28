import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

export default class App extends Component {
  state = {
    items : [],
    id : 0,
    item : "",
    editItem : false
  }

  handleChange = e => {
    this.setState({
       item : e.target.value
    })
  }

    handleSubmit = e => {
      e.preventDefault(); 

      const newItem = {
        id : this.state.id,
        item : this.state.item
      }

      const updateItem = [...this.state.items, newItem];

      this.setState({
        items : updateItem,
        id : this.state.id +1,
        item : "",
        editItem : false
      })
  }

  clearList = () => {
    this.setState({
      items : []
    })
  }

  handleDelete = id => {
    const sortedItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items : sortedItems
    })
  }

  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items : filterItems,
      item : selectedItem.item,
      editItem : true,
      id : id
    })
  }
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Todo input
            </h3>
            <TodoInput   item={this.state.item} 
                         handleChange={this.handleChange}
                         handleSubmit={this.handleSubmit}
                         editItem={this.state.editItem}
              />

            <TodoList   items={this.state.items} 
                        handleDelete={this.handleDelete} 
                        handleEdit={this.handleEdit}
                        clearList={this.clearList}
               />
          </div>
        </div>
      </div>
    )
  }
}
