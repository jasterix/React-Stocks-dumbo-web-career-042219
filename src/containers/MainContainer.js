import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    stocks: [],
    portfolio: []
  }

  handleAddToPortfolio = (stock) => {
    // console.log(this.state.portfolio);
    return this.setState({portfolio: [...this.state.portfolio, stock]})
    // debugger
  }

  handleSellStocks=(stockObj)=> {
    let currentPortolio = [...this.state.portfolio]
    let index = currentPortolio.indexOf(stockObj)

    if(index !== -1) {
      currentPortolio.splice(index, 1)
      this.setState({portfolio: currentPortolio})
    }
  }

componentDidMount() {
  fetch('http://localhost:3000/stocks')
  .then(res=> res.json())
  .then(data=>{
    this.setState({stocks:data})
  })
}
  render() {

    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addToPortfolio={this.handleAddToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.portfolio}
                stocks={this.state.stocks}
                sellStocks={this.handleSellStocks}
                 />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
