import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {



  render() {
    // console.log(this.props);
    let stocks = this.props.stocks.map(stock=> (
      <Stock key={stock.id} stock={stock} />
    ))

    return (
      <div>
        <h2>Stocks</h2>
        {
          stocks
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
