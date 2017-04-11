import React, { Component } from 'react'
import RenderList from './RenderList'

export default class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      input : "",
      listItems : [],
    }
  }

  handleClick(){
    let groceryItem = { itemName : this.state.input, id: Date.now() };
    this.state.listItems.push( groceryItem )
    this.setState({
        input : '',
        listItems: this.state.listItems
    })
  }

  handleDelete(id){
    this.setState({ listItems: this.state.listItems.filter(item =>{
      return item.id !== id;
      })
    })
  }

  render() {
    return (
      <div className = "grocertList">
        <input type = "text"
               placeholder = "items here yo"
               value = { this.state.input }
               onChange = { (event) => this.setState ( { input:event.target.value } ) }/>
        <input type = "submit"
               onClick = { this.handleClick.bind(this) }/>
        <section> All Items </section>
        <RenderList listItems = { this.state.listItems }
                    remove = {this.handleDelete.bind(this)}/>
      </div>
    )
  }
}
