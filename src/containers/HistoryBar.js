import React, { Component } from 'react';
import History from '../components/history/History';


export default class HistoryBar extends Component {
  state = {
    history: ['one', 'two', 'three']
  }

  render() {
    const { history } = this.state;
    return (
      <>
        <h2>History</h2>
        <History history={history}/>
      </>
    );
  }
}
