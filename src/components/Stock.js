import React from 'react'

class Stock extends React.Component {

render() {
  // console.log(this.props);
  return (
    <div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
              this.props.stock.name
                //Company Name

            }</h5>
          <p className="card-text">{
              this.props.stock.price
              //ticker: stock price
            }</p>
        </div>
      </div>


    </div>
  );
}
}
export default Stock
