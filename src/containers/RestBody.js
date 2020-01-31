import React, { Component } from 'react';
import RestForm from '../components/form/RestForm';
import fetchMyStuff from '../services/fetchMyStuff';

export default class RestBody extends Component {
  state = {
    url: '',
    rawJsonBody: '',
    username: '',
    password: '',
    token: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSumbit = (event) => {
    event.preventDefault();

    const { url, route } = event.target;

    console.log(url.value);
    console.log(route.value);

    fetchMyStuff(url.value, route.value);
  }

  render() {
    const { url, rawJsonBody, username, password, token } = this.state;
    return (
      <>
        <RestForm 
          url={url}
          rawJsonBody={rawJsonBody}
          username={username}
          password={password}
          token={token}
          onChange={this.handleChange}
          onSubmit={this.handleSumbit}
        />
      </>
    );
  }
}
