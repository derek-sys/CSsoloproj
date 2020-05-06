import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = getInitialState();
  }
}
