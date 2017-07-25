import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetails from './components/video-details';

const API_KEY = 'AIzaSyD92HKyOXgqiSvuqY4VXxTE5Ou6CmSV3Cc';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'quaz9'}, (videos) => {
      this.setState({videos});
    });

  }

  render() {
    return (
        <div>
          <SearchBar/>
          <VideoDetails/>
          <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));