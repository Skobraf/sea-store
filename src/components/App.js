import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({ fishes });
  };

  deleteFish =(key) => {

    const fishes = {...this.state.fishes};
    delete fishes[key];
    this.setState({ fishes });
     console.log(fishes);
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  };

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1 ;
    this.setState({ order });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
          {Object.keys(this.state.fishes).map(key => (
            <Fish
            key={key}
            index={key}
            details={this.state.fishes[key]}
            addToOrder={this.addToOrder} />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
        addFish={this.addFish}
        loadSampleFishes={this.loadSampleFishes}
        updateFish={this.updateFish}
        deleteFish={this.deleteFish}
        fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
