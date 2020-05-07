import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import JournalArticleBox from './temp3';

//const API = 'http://api.plos.org/search?q=everything:';
//const DEFAULT_QUERY = 'drosophila';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      fetchedList: false,
      jarticles: [],
      query: '',
    };
  }

  handleSearchChange(e) {
    this.setState({ query: e.target.value });
    console.log('result querty:' + e.target.value);
    console.log('state: ' + this.state.query);
  }

  handleSubmit() {
    const DEFAULT_QUERY = this.state.query;

    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.plos.org/search?q=everything:${DEFAULT_QUERY}&fl=id,abstract&wt-json`
    )
      //.then((response) => response.json())
      .then((articles) => {
        console.log('this is line 28' + JSON.stringify(articles));
        const data = articles.data.response.docs;
        if (Array.isArray(data));
        return this.setState({
          jarticles: articles.data.response.docs,
          fetchedList: true,
        });
      })
      .catch((err) =>
        console.log('articles.componentDidMount encountered ERROR', err)
      );
  }

  render() {
    if (!this.state.fetchedList) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="Search">Enter query</label>
            <input
              id="query"
              type="text"
              placeholder="what?"
              onChange={this.handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      );
    }

    const { jarticles } = this.state;

    if (!jarticles) return null;

    if (!jarticles.length) return <div>Sorry, no entries found</div>;

    const elements = jarticles.map((el, i) => {
      return <JournalArticleBox key={i} info={el} />;
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h2>Here you go, you better appreciate this...</h2>
        </header>
        <div className="Container">{elements}</div>
      </section>
    );
  }
}

export default Articles;

// .then((res) => res.json())
// .catch((error) => console.error('Error:', error))
//  .then((response) => console.log('Success:', response));
//};
