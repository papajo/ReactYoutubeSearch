import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './keys.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videolist'
import SearchBar from './components/searchbar';

// const App = function() {
//   return <div>Hi!</div>;
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
