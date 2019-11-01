import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints, getImageUrl } from '../config';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    axios
      .get(endpoints.mostPopularMovies())
      .then((data) => {
        this.setState({
          list: data.data.results,
        });
      });
  }
  
  getTitle = (title) => {
    console.log(title);
  };
  
  render() {
    return (
      <div>
        {this.state.list.map((card) => (
          <Card
            getTitle={this.getTitle}
            key={card.original_title}
            backgroundImage={getImageUrl(card.backdrop_path)}
            date={card.release_date}
            rating={card.vote_average}
            votes={card.vote_count}
            description={card.overview}
            title={card.original_title}
          />
        ))}
      </div>
    );
  }
}

export default App;
