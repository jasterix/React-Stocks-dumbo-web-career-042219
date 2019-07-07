import React, {Component} from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    unfilteredStocks: [],
    filteredStocks: []
  }

  //----------------FUNCTION TO ADD STOCKS TO Portfolio
  handleAddToPortfolio = (stock) => {
    return this.setState({
      portfolio: [
        ...this.state.portfolio, stock
      ]
    })
  }

  //----------------FUNCTION TO SELL STOCKS
  handleSellStocks = (stockObj) => {
    let currentPortfolio = [...this.state.portfolio]
    let index = currentPortfolio.indexOf(stockObj)

    if (index !== -1) {
      currentPortfolio.splice(index, 1)
      this.setState({portfolio: currentPortfolio})
    }
  }

  //----------------FILTER STOCKS BY TYPE
  handleFilterStocks = (value) => {
    this.setState({
      stocks: [...this.state.unfilteredStocks]
    })

    const arr = [...this.state.unfilteredStocks]
    // console.log(this.state.unfilteredStocks);

    const newArr = arr.filter(stock => stock.type === value)
    this.setState({filteredStocks: newArr})
    this.setState({stocks: newArr})
    console.log(this.state.filteredStocks);

  }

  //----------------SORT STOCKS Alphabetically OR BY PRICE
  handleSortStocks = (value) => {
    const arr = [...this.state.stocks]

//-------Alphabetically----------------------------
////////////CAN SORT IN REVERSE ORDER BUT NOT Alphabetically
    if(value==="Alphabetically"){
      debugger
        const sortedArr = arr.sort((a, b)=> {
          console.log(a.name + "------- " + b.name);
          return a.name > b.name ? -1: 1

      })
      console.log(sortedArr);
      this.setState({stocks: sortedArr})

//-------BY PRICE-------------------------
} else if(value==="Price"){
        const priceArr = arr.sort((a, b)=>{
          return a.price > b.price ? 1: -1
        })
        this.setState({stocks:priceArr})
}
  }


  //----------------FETCH ARRAY OF STOCKS AND ADD TO STATE IN STOCKS AND UNFILTERED STOCK ARRAYS-------------------------

  componentDidMount() {
    fetch('http://localhost:3000/stocks').then(res => res.json()).then(data => {
      this.setState({stocks: data})
      this.setState({unfilteredStocks: data})
    })
  }

  //--------------------------------RENDER----------------
  render() {

    return (<div>
      <SearchBar sort={this.handleSortStocks} filter={this.handleFilterStocks}/>

      <div className="row">
        <div className="col-8">

          <StockContainer stocks={this.state.stocks} addToPortfolio={this.handleAddToPortfolio}/>

        </div>
        <div className="col-4">

          <PortfolioContainer portfolio={this.state.portfolio} stocks={this.state.stocks} sellStocks={this.handleSellStocks}/>

        </div>
      </div>
    </div>);
  }

}

export default MainContainer;
