import React, { Component } from 'react';
import axios from 'axios';

const API = 'http://api.plos.org/search?q=everything:';
const DEFAULT_QUERY = 'coral';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/${
        API + DEFAULT_QUERY
      }&fl=id,abstract&wt-json`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data[0].data.docs.map((hit) => (
          <div>
            <h3>{hit.id}</h3>
            <h6>{hit.abstract}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
