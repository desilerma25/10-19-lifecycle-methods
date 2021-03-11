import React from 'react';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import './App.css';
import {connect} from 'react-redux'
import {gotItems} from './actions/action'

class App extends React.Component{

  state = {
    page: "items",
    term: ""
  }

  changePage = (e) => {

    const page = e.target.id.split("-")[0]
    this.setState({
      page: page
    })
  }

  // addToCart = (id) => {
  //   // find the Item with that id 
  //   const foundItem = this.state.items.find(item => item.id === id)
  //   // update state to show that the item is in the cart
  //   this.setState((prevState) => ({
  //     cart: [...prevState.cart, foundItem]
  //   }), () => console.log(this.state) )
  // }

  // LCM can ONLY be used in a class component 
  componentDidMount(){
    // typically fetch requests happen in a componentDidMount
    console.log("app mounted")

    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(json => {this.props.getItems(json)
      // this.setState({items: json})

    })
  }



  render(){
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        {this.state.page === "items" ? <ItemsContainer  addToCart={this.addToCart}  /> : <CartContainer />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (items) => dispatch(gotItems(items))
  }
}

export default connect(null, mapDispatchToProps)(App);