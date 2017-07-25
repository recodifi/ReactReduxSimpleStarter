import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
        <div className="form-group">
          <input
              className="form-control"
              placeholder="Search movie..."
              value={this.state.term}
              onChange={ev => this.setState({term: ev.target.value})}/>
        </div>
    )
  }
}