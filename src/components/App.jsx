import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    query: '',
  };

  onSubmitForm = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmitForm} />
      </>
    );
  }
}
