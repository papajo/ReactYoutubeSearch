import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  render() {
    return (
        <div className="container">
        <input onChange={event => this.setState({ term: event.target.value })}/>
        </div>
    );
  }
  // onIputChange(event) {
  //   console.log(event.target.value);
  //
  // }
}

export default SearchBar;
