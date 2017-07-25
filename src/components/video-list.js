import React, { Component } from 'react';

import VideoListItem from './video-list-item'

export default class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: this.props.videos};
  }
  render() {
    return (
        <div className="list-group col-md-6">
          {this.props.videos.map((video) => {return  <VideoListItem key={video.etag} movie={video}/>})}
        </div>
    )
  }
}