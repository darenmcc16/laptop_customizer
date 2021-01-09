import React, { Component } from 'react';
import './App.css';
import FEATURES from './index';
import FeaturesContainer from './Features/FeaturesContainer';
import FeatureStore from './Features/FeatureStore';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Header from './Header/Header';


class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    features: FEATURES,
    selected: {},
  };
  this.handleClick = this.handleClick.bind(this)
  this.total = this.total.bind(this)
};


  // updateFeature = (feature, newValue) => {
  //   const selected = Object.assign({}, this.state.selected);
  //   selected[feature] = newValue;
  //   this.setState({
  //     selected
  //   });
  // };

  handleClick(name, cost, title){
    const selected = Object.assign({}, this.state.selected);
    selected[title] = [name, cost]

    this.setState({
      selected
    });
    this.total()
  }

  total = () => {
    let sum = 0
    Object.keys(this.state.selected).forEach(key => {
        sum += this.state.selected[key][1]
    })
    return sum;
}

  render() {
    return(
      <div className='App'>
        <Header />
        <main>
          <FeaturesContainer
          features={this.state.features}
          selected={this.state.selected}
          onClick={this.handleClick}
          />
          <ShoppingCart
          selected={this.state.selected}
          total={this.total()}
          />
        </main>
      </div>
    );
}
}

export default App;
