handleAddToPortfolio = (stock) => {
  let id = 5
  let portfolio = [...this.state.portfolio]

  let mine = portfolio.map(stock => {
    let index = portfolio.indexOf(stock)
    if(stock.id===id){
      console.log(index);
      debugger
      portfolio.splice(index,1)
    }
    this.setState({removed: portfolio})
  })
  console.log(this.state);
  this.setState({portfolio:[...this.state.portfolio, stock]})
  // console.log(this.state.portfolio);
}
