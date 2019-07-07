import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let myStock = this.props.portfolio.map(myStock => (
      <Stock key={myStock.id} stock={myStock} addToPortfolio={this.props.addToPortfolio} />
    ))

    console.log(this.props);
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            myStock
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
