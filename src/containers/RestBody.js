import React, { Component } from 'react';
import RestForm from '../components/RestForm';
import History from '../components/history/History';
import Response from '../components/Response';
import handleFetch from '../services/handleFetch';

export default class RestBody extends Component {
  state = {
    history: [],
    response: '',
    url: '',
    rawJsonBody: '',
    username: '',
    password: '',
    token: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { url, route } = event.target;
    if(!url.value || !route.value) return;

    this.setState(state => ({
      history: [{ 
        url: url.value,
        route: route.value
      }, 
      ...state.history]
    }));

    handleFetch(url.value, route.value)
      .then(data => {
        this.setState(state => ({
          response: JSON.stringify(data)
        }));
      });
  }

  render() {
    const { url, rawJsonBody, username, password, token, history, response } = this.state;
    return (
      <>
        <History history={history} onSubmit={this.handleSubmit}/>
        <RestForm 
          url={url}
          rawJsonBody={rawJsonBody}
          username={username}
          password={password}
          token={token}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Response response={response} />
      </>
    );
  }
}
