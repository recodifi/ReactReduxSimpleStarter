import React, {Component} from 'react';

export default class VideoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {movie: this.props.movie};
  }
  render() {
    return (
        <div className="col-md-6">movie</div>
    );
  }
}