import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    //console.log('event', event.target.value);
    this.setState({ query: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter your search query', { autoClose: 1500 });
      this.clearInput();
      return;
    }

    this.props.onSubmit(this.state.query);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    
    return (
      <header className="searchbar">
        <ToastContainer />
        <form className="form" onSubmit={this.handleSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
