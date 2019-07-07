import React from 'react';

class SearchBar extends React.Component {

  handleChange = (event) => {
    console.log(event.target.value);
    this.props.sort(event.target.value)
  }

  handleFilterTypeChange = (event) => {
    this.props.filter(event.target.value);
  }
  render() {

    return (<div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={null} onChange={this.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={null} onChange={this.handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.handleFilterTypeChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

    </div>);
  }
}

export default SearchBar;
