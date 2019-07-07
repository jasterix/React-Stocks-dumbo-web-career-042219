import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state= {
    stocks: [],
    portfolio: [],
    unfilteredStocks: [],
    filterValue: "",
    filteredStocks: []
  }

  handleAddToPortfolio = (stock) => {
    return this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  handleSellStocks=(stockObj)=> {
    let currentPortfolio = [...this.state.portfolio]
    let index = currentPortfolio.indexOf(stockObj)

    if(index !== -1) {
      currentPortfolio.splice(index, 1)
      this.setState({portfolio: currentPortfolio})
    }
  }

  handleSortStocks=(value)=> {
    console.log(this.state.filterValue);
  }

  handleFilterStocks=(value)=> {
    console.log(value)
    const arr = [...this.state.stocks]

    const newArr = arr.filter(stock => stock.type === value)
    this.setState({filteredStocks: newArr})
    console.log(this.state.filteredStocks);

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
        <SearchBar
          sort={this.handleSortStocks}
          filter={this.handleFilterStocks}
          />

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
