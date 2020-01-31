import React, { Component } from 'react';
import RestForm from '../components/form/RestForm';
import handleFetch from '../services/handleFetch';
import History from '../components/history/History';

export default class RestBody extends Component {
  state = {
    history: [],
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

    handleFetch(url.value, route.value)
      .then(data => {
        this.setState(state => ({
          history: [...state.history, data.name]
        }));
      });
  }

  render() {
    const { url, rawJsonBody, username, password, token, history } = this.state;
    return (
      <>
        <History history={history}/>
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
