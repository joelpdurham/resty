import React, { Component } from 'react';
import History from '../components/History';


export default class HistoryBar extends Component {
  state = {}

  render() {
    return (
      <>
        <h2>History</h2>
        <History />
      </>
    );
  }
}
