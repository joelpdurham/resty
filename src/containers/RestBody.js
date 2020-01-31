import React, { Component } from 'react';
import RestForm from '../components/form/RestForm';

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
        />
      </>
    );
  }
}
