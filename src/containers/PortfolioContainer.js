import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let portfolioStocks = this.props.portfolio.map(myStock => (
      <Stock
        key={myStock.id}
        stock={myStock}
        sellStocks={this.props.sellStocks}
         />
    ))

    // console.log(this.props);
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            portfolioStocks
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
