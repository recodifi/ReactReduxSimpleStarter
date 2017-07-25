import React, {Component} from 'react';

export default class VideoListItem extends Component {
  constructor(props){
    super(props);
    this.state = {movie: this.props.movie.snippet}
  }
  render() {
    return (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.state.movie.title}</h5>
            <small>{this.state.movie.publishedAt}</small>
          </div>
          <img src={this.state.movie.thumbnails.high.url} alt={this.state.movie.title}/>
          <p className="mb-1">{this.state.movie.description}</p>
          <small>{this.state.movie.channelTitle}</small>
        </a>
    );
  }
}
