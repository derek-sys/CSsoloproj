import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import JournalArticleBox from './temp3';

const API = 'http://api.plos.org/search?q=everything:';
const DEFAULT_QUERY = 'drosophila';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedList: false,
      jarticles: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${
          API + DEFAULT_QUERY
        }&fl=id,abstract&wt-json`
      )
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
    if (!this.state.fetchedList)
      return (
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      );

    const { jarticles } = this.state;

    if (!jarticles) return null;

    if (!jarticles.length) return <div>Sorry, no entries found</div>;

    const elements = jarticles.map((el, i) => {
      return <JournalArticleBox key={i} info={el} />;
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h2>
            Here you go, Morty, just be careful with it. A little knowledge can
            be a dangerous thing...
          </h2>
        </header>
        <div className="Container">{elements}</div>
      </section>
    );
  }
}

export default Articles;
